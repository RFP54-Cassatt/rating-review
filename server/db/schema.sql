-- psql -U postgres pgone < db/schema.sql

DROP DATABASE IF EXISTS pgone;

CREATE DATABASE pgone;

\c pgone;

CREATE TABLE review (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INT NOT NULL,
  rating INT NOT NULL,
  date BIGINT,
  summary VARCHAR ( 300 ),
  body VARCHAR ( 1000 ),
  recommend VARCHAR,
  reported BOOLEAN,
  reviewer_name VARCHAR ( 30 ),
  reviewer_email VARCHAR ( 75 ),
  response VARCHAR ( 500 ),
  helpfulness INT
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY NOT NULL,
  url VARCHAR ( 250 ),
  review_id INT REFERENCES review ( id )
);

CREATE TABLE IF NOT EXISTS characteristics (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INT,
  name VARCHAR ( 30 )
);

CREATE TABLE IF NOT EXISTS characteristic_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  characteristic_id INT REFERENCES characteristics ( id ),
  review_id INT REFERENCES review ( id ),
  value INT NOT NULL
);

\COPY review(id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
  FROM '/Users/nvaline/Documents/hackreactor/SDC/rating-review/db/csv/reviews.csv'
  DELIMITER ','
  CSV HEADER;

\COPY photos(id, review_id, url)
  FROM '/Users/nvaline/Documents/hackreactor/SDC/rating-review/db/csv/reviews_photos.csv'
  DELIMITER ','
  CSV HEADER;

\COPY characteristics(id, product_id, name)
  FROM '/Users/nvaline/Documents/hackreactor/SDC/rating-review/db/csv/characteristics.csv'
  DELIMITER ','
  CSV HEADER;

\COPY characteristic_reviews(id, characteristic_id, review_id, value)
  FROM '/Users/nvaline/Documents/hackreactor/SDC/rating-review/db/csv/characteristic_reviews.csv'
  DELIMITER ','
  CSV HEADER;
const http = require('k6/http');
const { sleep } = require('k6');

export let options = {
  vus: 1000,
  duration: '10s'
};
export default function () {
  http.get(`http://localhost:3113/api/reviews?product_id=${Math.random(Math.floor() * 5050000)}`);
  sleep(1);
}
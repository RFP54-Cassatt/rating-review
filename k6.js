const http = require('k6/http');
const { sleep } = require('k6');

export let options = {
  vus: 8000,
  duration: '5m',
  // stages: [
  //   { duration: '10s', target: 1000 },
  //   { duration: '10s', target: 2500 },
  //   { duration: '1m', target: 3500 }
  //   { duration: '1m', target: 4500 }
  //   { duration: '1m', target: 5500 }
    // { duration: '10s', target: 6500 },
    // { duration: '10s', target: 7500 },
    // { duration: '20s', target: 8500 },
    // { duration: '20s', target: 9500 },
    // { duration: '20s', target: 10500 }
    // { duration: '20s', target: 11500 },
    // { duration: '20s', target: 12500 }
  // ]
};
export default function () {
  http.get(`http://localhost:3113/api/reviews?product_id=${Math.floor(Math.random() * 5000000)}`);
  sleep(1);
}

// export default function () {
//   http.get(`http://localhost:3113/api/reviews/meta?review_id=${Math.floor(Math.random() * 50000)}`);
//   sleep(1);
// }
const controller = require('./controllers');
const router = require('express').Router();

router.get('/review', controller.get.reviews);

router.get('/review/meta', controller.get.meta);

router.post('/reviews', controller.post.review);

router.put('/reviews/:review_id/helpful', controller.put.helpful);

router.put('/reviews/:review_id/report', controller.put.report);

module.exports = router;



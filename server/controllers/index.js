exports.get = require('./get');
exports.post = require('./post');
exports.put = require('./put');


//THESE WILL BE USED TO CALL THE MODELS












//EXAMPLE FROM DB SPRINT

// module.exports = {
//   get: function (req, res) {
//     messages.getAll((err, data) => {
//       if (err) {
//         console.log(err);
//         res.sendStatus(404);
//       } else {
//         res.status(200).json(data);
//       }
//     });
//   },

//   post: function (req, res) {
//     messages.create(req.body, (err, data) => {
//       if (err) {
//         console.log(err);
//         res.sendStatus(400);
//       } else {
//         res.status(201).json(data);
//       }
//     });
//   }
// };
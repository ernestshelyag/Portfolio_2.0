
const numbers = require('../db.json').numbers;

module.exports.getAbout = function (req, res, next) {
  res.render('pages/about', {numbers});
};

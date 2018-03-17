
const works = require('../db.json').works;

module.exports.getIndex = function (req, res, next) {
  res.render('pages/index', {works});
};

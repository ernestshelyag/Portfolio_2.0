const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
//  Модели
const Works = require('../models/works');
const Numbers = require('../models/numbers');

module.exports.getAdmin = function (req, res) {
  res.render('pages/admin');
};

module.exports.sendAdminNumbers = function (req, res) {

  let {years, noble, bigmacs, toes} = req.body;
  if (!years || !noble || !bigmacs || !toes) {
    return res.render('pages/admin', {msgnumbers: 'Заполните все поля!'});
  }
  let receivedNumbers = Numbers.get();
  let counter = 0;
  //  Изменение данных
  for (let key in req.body) {
    if (receivedNumbers[counter].number !== req.body[key]) {
      Numbers.update(receivedNumbers[counter].number, req.body[key]);
    }
    counter++;
  }
  res.render('pages/admin', {msgnumbers: 'Данные успешно сохранены'});

};

// ----

module.exports.sendAdminWorks = function (req, res, next) {
  let form = new formidable.IncomingForm();
  let works = path.join('public', 'upload', 'portfolio');
  let fileName = '';

  if (!fs.existsSync(works)) {
    fs.mkdir(portfolio);
  }

  form.uploadDir = path.join(process.cwd(), works);

  form.parse(req, (err, fields, files) => {
    if (err) return next(err);
    // img
    if (!files.photo.name || !files.photo.size) {
      return res.render('pages/admin', {msgfile: 'Вы не выбрали изображение'});
    }
    // title
    if (!fields.title) {
      fs.unlink(files.photo.path);
      return res.render('pages/admin', {msgfile: 'Введите название сайта'});
    }
    // description
    if (!fields.description) {
      fs.unlink(files.photo.path);
      return res.render('pages/admin', {msgfile: 'Введите описание сайта'});
    }
    //  link
    if (!fields.link) {
      fs.unlink(files.photo.path);
      return res.render('pages/admin', {msgfile: 'Введите ссылку на сайт'});
    }

    fileName = path.join(works, files.photo.name);

    fs.rename(files.photo.path, fileName, err => {
      if (err) return next(err);

      let startPos = fileName.indexOf('upload');
      let filePath = fileName.substr(startPos);

      Works.create(fields.title, fields.link, filePath, fields.description);

      res.redirect('/admin');
    });
  })
};

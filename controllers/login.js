
module.exports.getLogin = function (req, res, next) {
  res.render('pages/login');
};

module.exports.sendLogin = function (req, res) {

  if (req.body.login === '123' && req.body.password === '123') {
    req.session.isAdmin = true;
    res.redirect('/admin');
  }
  res.render('pages/login', {msgslogin: 'Неверный логин или пароль'});

};

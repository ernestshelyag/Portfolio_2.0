const express = require('express');
const router = express.Router();

const pageMain = require('./index');
const pageAbout = require('./about');
const pageContacts = require('./contacts');
const pageLogin = require('./login');
const pageAdmin = require('./admin');

const isAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    return next();
  }
  res.redirect('/login');
};

router.get('/', pageMain.getIndex);

router.get('/about', pageAbout.getAbout);

router.get('/contacts', pageContacts.getContact);
router.post('/contacts', pageContacts.sendContact);

router.get('/login', pageLogin.getLogin);
router.post('/login', pageLogin.sendLogin);

router.get('/admin', isAdmin, pageAdmin.getAdmin);
router.post('/admin/num', pageAdmin.sendAdminNumbers);
router.post('/admin/works', pageAdmin.sendAdminWorks);

module.exports = router;

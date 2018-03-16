
function showMail() {
  contactsWrp.classList.add('active');
  contactsMail.classList.add('active');
  mail.classList.add('active');
}
function closeMail(e) {
  e.preventDefault();
  contactsWrp.classList.remove('active');
  contactsMail.classList.remove('active');
  mail.classList.remove('active');
}

const contactsWrp = document.querySelector('#contactsWrp');
const contactsMail = document.querySelector('#contactsMail');
const mail = document.querySelector('#mail');
const mailBtn = document.querySelector('#contactsBtn');
const closeBtn = document.querySelector('#closeBtn');

mailBtn.addEventListener('click', showMail);
closeBtn.addEventListener('click', closeMail);


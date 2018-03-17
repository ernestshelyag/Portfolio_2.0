
// - - - - -

const contactsWrp = document.querySelector('#contactsWrp');
const contactsMail = document.querySelector('#contactsMail');
const mailBtn = document.querySelector('#contactsBtn');
const closeBtn = document.querySelector('#closeBtn');
const formMail = document.querySelector('#mail');

// contacts animation

function showMail() {
  contactsWrp.classList.add('active');
  contactsMail.classList.add('active');
  formMail.classList.add('active');
}
function closeMail(e) {
  e.preventDefault();
  contactsWrp.classList.remove('active');
  contactsMail.classList.remove('active');
  formMail.classList.remove('active');
}

mailBtn.addEventListener('click', showMail);
closeBtn.addEventListener('click', closeMail);

// send email

function prepareSendMail (e) {
  e.preventDefault();
  const data = {
    name: formMail.name.value,
    email: formMail.email.value,
    text: formMail.text.value
  };

  let resultContainer = formMail.querySelector('.status');
  resultContainer.innerHTML = 'Sending...';
  sendJson('/contacts', data, 'POST', (data) => {
    formMail.reset();
    resultContainer.innerHTML = data.msg;
  });
}

function sendJson (url, data, method, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function (e) {
    let result;
    try {
      result = JSON.parse(xhr.responseText);
    } catch (e) {
      cb ({msg: 'Извините в данных ошибка', status: 'Error'});
    }
    cb(result);
  };
  xhr.send(JSON.stringify(data));
}

formMail.addEventListener('submit', prepareSendMail);

// - - - - -

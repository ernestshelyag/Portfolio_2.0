
function addSquares () {
  function randCustom (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let squareQuantity = document.body.clientHeight / 100;
  let randSquare = function () {
    let decorSquare = document.createElement('span');
    let randBorder = randCustom(2, 10) + 'px';
    let randWidth = randCustom(100, 200) + 'px';
    let randHeight = randCustom(100, 200) + 'px';
    let randTop = randCustom(0, document.body.clientHeight - 301) + 'px';
    let randLeft = randCustom(0, document.body.clientWidth - 401) + 'px';
    let randOpacity = '0.' + randCustom(1, 3);
    decorSquare.style.cssText = ' width: ' + randWidth + ';' +
      'height: ' + randHeight + ';' +
      'top: ' + randTop + ';' +
      'left: ' + randLeft + ';' +
      'border: solid ' + randBorder + ' rgba(133,132,135,' + randOpacity + ');' +
      'display: block;' +
      'position: absolute;' +
      'z-index: -1;';
    return decorSquare;
  };
  for (let i = 0; i < squareQuantity; i++) {
    document.querySelector('.wrp').appendChild(randSquare());
  }
}
addSquares();



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


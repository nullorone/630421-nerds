var modal = document.querySelector('.modal');
var writeUsBtn = document.querySelector('.contacts__btn');
var formWriteUsInput = modal.querySelector('.form-writeus__input');
var inputName = modal.querySelector('#form-writeus__name-user');
var inputEmail = modal.querySelector('#form-writeus__email-user');
var formWriteUsSubmit = modal.querySelector('.form-writeus__btn');

writeUsBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
});

var inputNameError = function () {
  if (inputName.classList.contains('form-writeus__input--error')) {
    inputName.classList.remove('form-writeus__input--error');
  }
  inputName.classList.add('form-writeus__input--error');
};

var inputEmailError = function () {
  if (inputEmail.classList.contains('form-writeus__input--error')) {
    inputEmail.classList.remove('form-writeus__input--error');
  }
  inputEmail.classList.add('form-writeus__input--error');
};

formWriteUsSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!inputName.value) {
    inputNameError();
  } else if (!inputEmail.value) {
    inputEmailError();
  } else if (!inputName.value && !inputEmail.value) {
    inputNameError();
    inputEmailError();
  }
});

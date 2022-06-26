const inputRef = document.querySelector('#validation-input');

const validationForInput = event => {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', validationForInput);

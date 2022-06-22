const inputRef = document.querySelector('#validation-input');

const validationForInput = event => {
  if (event.currentTarget.value.length > inputRef.dataset.length) {
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.add('valid');
  }
};

inputRef.addEventListener('blur', validationForInput);

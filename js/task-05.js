const inputRef = document.querySelector('#name-input');

const outputRef = document.querySelector('#name-output');

const changeName = event => {
  console.log(event.currentTarget.value);

  if (event.currentTarget.value === '') {
    outputRef.textContent = 'Anonymous';
  } else {
    outputRef.textContent = event.currentTarget.value;
  }
};

inputRef.addEventListener('input', changeName);

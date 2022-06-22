let counterValue = 0;

const counterValueRef = document.querySelector('#value');

const incrBtnRef = document.querySelector('button[data-action="increment"]');

const descrBtnRef = document.querySelector('button[data-action="decrement"]');

const incrBtnAction = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

const descrBtnAction = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

incrBtnRef.addEventListener('click', incrBtnAction);
descrBtnRef.addEventListener('click', descrBtnAction);

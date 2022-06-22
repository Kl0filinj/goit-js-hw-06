function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainBoxDivRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');

let boxWidth = 30;
let boxHeight = 30;

const createBoxes = () => {
  for (let i = 0; i < inputRef.value; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = boxWidth + 'px';
    newBox.style.height = boxHeight + 'px';
    newBox.style.backgroundColor = getRandomHexColor();

    mainBoxDivRef.append(newBox);

    boxWidth += 10;
    boxHeight += 10;
  }
};

const destroyBoxes = () => {
  mainBoxDivRef.innerHTML = '';
  inputRef.value = '';
  boxWidth = 30;
  boxHeight = 30;
};

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

console.log(getRandomHexColor);

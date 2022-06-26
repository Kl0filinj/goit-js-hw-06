function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorNameRef = document.querySelector('.color');
const btnChangeColorRef = document.querySelector('.change-color');
let randomColor = getRandomHexColor();

const changeBgColor = () => {
  colorNameRef.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
};

btnChangeColorRef.addEventListener('click', changeBgColor);

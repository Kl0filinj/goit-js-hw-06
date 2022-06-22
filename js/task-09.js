function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorNameRef = document.querySelector('.color');
const btnChangeColorRef = document.querySelector('.change-color');

const changeBgColor = () => {
  colorNameRef.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};

btnChangeColorRef.addEventListener('click', changeBgColor);

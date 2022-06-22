const inputRangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeFontsize = event => {
  textRef.style.fontSize = event.currentTarget.value + 'px';
};

inputRangeRef.addEventListener('input', changeFontsize);

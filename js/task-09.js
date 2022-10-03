function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanRef = document.querySelector('.color')
const bodyRef = document.querySelector('body')
const btnRef = document.querySelector('.change-color')
btnRef.addEventListener('click', onBtnClick)
function onBtnClick() {
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`
  spanRef.textContent = getRandomHexColor()
}


const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
function changeBackgroundColor() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  color.textContent = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeColor.addEventListener('click', changeBackgroundColor)
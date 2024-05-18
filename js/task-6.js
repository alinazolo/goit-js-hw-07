const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

function createBoxes(amount) {
    let size = 30;
    let boxesArray = [];

    for (let i = 0; i < amount; i++) {
      const newDiv = document.createElement('div');
      newDiv.style.width = `${size + i * 10}px`;
      newDiv.style.height = `${size + i * 10}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      boxesArray.push(newDiv);  
    }
    boxes.append(...boxesArray);
  }


function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
create.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
  if (amount >=1 && amount <= 100) {
boxes.innerHTML = '';  
        createBoxes(amount);
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

destroy.addEventListener("click", destroyBoxes);
  


const container = document.querySelector('#grid-container');
const colorChooser = document.querySelector('#colorChooser');
const colorChoices = document.querySelectorAll('.color-choice');
const clearBtn = document.querySelector('#clearBtn');
const gridSize = document.querySelector('#grid-size');
const output = document.querySelector('#slide-value');

colorChoices.forEach((colorChoice) =>
  colorChoice.addEventListener('click', activateColorChoice)
);

clearBtn.addEventListener('click', clearGrid);
gridSize.addEventListener('change', changeGridSize);

function makeGrid(cols, rows) {
  let gridSize = cols * rows;
  container.style.setProperty('--grid-cols', cols);
  container.style.setProperty('--grid-rows', rows);
  for (let i = 1; i <= gridSize; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = 'grid-item';
    container.appendChild(newDiv);
    newDiv.addEventListener('mouseenter', colorGrid);
  }
}

function changeGridSize() {
  output.innerText = `${gridSize.value} x ${gridSize.value}`;
  clearGrid();
}

function activateColorChoice(e) {
  let colorChoice = e.target.id;
  if (colorChoice === 'colorBtn') {
    deactivateColorChoice();
    e.target.classList.add('activeColor');
  } else if (colorChoice === 'blackBtn') {
    deactivateColorChoice();
    e.target.classList.add('activeColor');
  } else if (colorChoice === 'rainbowBtn') {
    deactivateColorChoice();
    e.target.classList.add('activeColor');
  } else {
    deactivateColorChoice();
    e.target.classList.add('activeColor');
  }
}

function deactivateColorChoice() {
  for (let i = 0; i < colorChoices.length; i++) {
    colorChoices[i].classList.remove('activeColor');
  }
}

function getActiveColorChoice() {
  let colorChoice;
  for (let i = 0; i < colorChoices.length; i++) {
    if (colorChoices[i].className === 'color-choice activeColor') {
      return (colorChoice = colorChoices[i].id);
    }
  }
}

function colorGrid(e) {
  let colorChoice = getActiveColorChoice();
  if (colorChoice === 'colorBtn') {
    e.target.style.backgroundColor = customColor();
  } else if (colorChoice === 'blackBtn') {
    e.target.style.backgroundColor = blackColor();
  } else if (colorChoice === 'rainbowBtn') {
    e.target.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  } else {
    e.target.style.backgroundColor = eraser();
  }
}

function customColor() {
  let color = colorChooser.value;
  return color;
}

function blackColor() {
  let color = 'rgb(0,0,0)';
  return color;
}

function randomColor() {
  let color = Math.floor(Math.random() * 255) + 1;
  return color;
}

function eraser() {
  let color = 'rgb(255,255,255)';
  return color;
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  makeGrid(gridSize.value, gridSize.value);
}

changeGridSize();

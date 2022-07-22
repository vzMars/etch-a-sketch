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
  deactivateColorChoice();
  e.target.classList.add('activeColor');
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
  switch (colorChoice) {
    case 'colorBtn':
      e.target.style.backgroundColor = customColor();
      break;
    case 'blackBtn':
      e.target.style.backgroundColor = blackColor();
      break;
    case 'rainbowBtn':
      e.target.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
      break;
    default:
      e.target.style.backgroundColor = eraser();
      break;
  }
}

function customColor() {
  return colorChooser.value;
}

function blackColor() {
  return 'rgb(0,0,0)';
}

function randomColor() {
  return Math.floor(Math.random() * 255) + 1;
}

function eraser() {
  return 'rgb(255,255,255)';
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  makeGrid(gridSize.value, gridSize.value);
}

changeGridSize();

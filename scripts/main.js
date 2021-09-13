const container = document.querySelector('#grid-container');

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

makeGrid(16, 16);

function colorGrid(e) {
  e.target.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
}

function randomColor() {
  let color = Math.floor(Math.random() * 255) + 1;
  return color;
}

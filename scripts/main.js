const container = document.querySelector('#grid-container');

function makeGrid(cols, rows) {
  let gridSize = cols * rows;
  container.style.setProperty('--grid-cols', cols);
  container.style.setProperty('--grid-rows', rows);
  for (let i = 1; i <= gridSize; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = 'grid-item';
    container.appendChild(newDiv);
  }
}

makeGrid(16, 16);

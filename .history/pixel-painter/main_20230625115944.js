const canvas = document.getElementById('canvas');

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  canvas.appendChild(cell);
}

const color = document.querySelectorAll
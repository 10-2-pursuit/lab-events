const canvas = document.getElementById('canvas');

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  canvas.appendChild(cell);
}

const color = document.querySelector(' div').style.background
document.querySelectorAll('#palette div').forEach((div) => {
    div.addEventListener('click', selectColor => {
        document.querySelector('').style.background = div.style.background;
    });
    }
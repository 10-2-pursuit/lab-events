const canvas = document.getElementById('canvas');

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  canvas.appendChild(cell);
}

const color = document.querySelector(' div').style.background
document.querySelectorAll('#palette div').forEach((div) => {
    div.addEventListener('click', selectColor => {
        document.querySelector('#current-color').style.background = selectColor.target.style.background;
    });
    })

    document.querySelectorAll('.cell').forEach((cell) => {
        cell.addEventListener('click', selectedCell => {
            selectedCell.target.style.background = document.querySelector('#current-color').style.background;
        });
        })

        const resetButton = document.getElementById('reset-button');
        resetButton.addEventListener('click', () => {
            document.querySelectorAll('.cell').forEach((cell) => {
              cell.style.background = 'white';
            });
          });


          const fillButton = document.getElementById('reset-button');  
          fillButton.addEventListener('click', () => {
            const colorToFill = currentColor.style.background;
            document.querySelectorAll('.cell').forEach((cell) => {
              cell.style.background = colorToFill;
            });
          });
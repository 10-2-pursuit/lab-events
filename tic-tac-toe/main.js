
function makeBoard() {
    const container = document.querySelector('.tic-tac-toe');
  
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('empty', 'square');
      container.appendChild(cell);
    }
  }
  
makeBoard()


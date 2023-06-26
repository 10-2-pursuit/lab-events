
function makeBoard() {
    const container = document.querySelector('.tic-tac-toe');
  
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('empty', 'square');
      container.appendChild(cell);
      makeMove(cell);
    }
}

let currentPlayer = 'X';

function makeMove(position) {
  position.addEventListener('click', () => {
    if (position.classList.contains("empty")) {
      position.textContent = currentPlayer;
      currentPlayer = (currentPlayer === "X" ? "O" : "X");
      position.classList.remove("empty");
    }
  });
}

// Reset Button
const resetButton = document.querySelector('button');

function reset() {
  let squareSpaces = document.querySelectorAll(".square");
  squareSpaces.forEach((square) => {
    square.remove()
  })
  makeBoard();
}

resetButton.addEventListener('click', reset);
makeBoard();

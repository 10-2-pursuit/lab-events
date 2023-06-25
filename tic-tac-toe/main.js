
function makeBoard() {
    const container = document.querySelector('.tic-tac-toe');
  
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('empty', 'square');
      container.appendChild(cell);
    }
}
makeBoard()


let currentPlayer = 'X';

function makeMove(event) {
  const square = event.target;

  if (square.classList.contains('empty')) {
    square.textContent = currentPlayer;
    square.classList.remove('empty');

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}
// Attach the event handler to all square elements
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('click', makeMove);
});

// Reset Button
const button = document.querySelector('button');
button.classList.add("reset-button");

function reset() {
 makeBoard();
}


const resetButton = document.getElementById('.reset-button');
resetButton.addEventListener('click', reset);

// Game Over Function
const container = document.querySelector('.tic-tac-toe');

function gameOver() {
    let game = false;
    squares.forEach(square => {
        if (square == "") {
            game = true;
        }
    });
    
    const div = document.querySelector(".tic-tac-toe");
    const newH3 = document.createElement("h3");
    newH3.textContent = "GAME OVER!";
    div.append(newH3);

    return game;
}
gameOver()
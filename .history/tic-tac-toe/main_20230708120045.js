// main.js

document.addEventListener('DOMContentLoaded', () => {
    makeBoard();
  });
  
  function makeBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
  
    for (let i = 0; i < 9; i++) {
      const square = document.createElement('div');
      square.classList.add('empty', 'square');
      square.addEventListener('click', makeMove);
      board.appendChild(square);
    }
  }
  
  let currentPlayer = 'X';
  
  function makeMove() {
    if (this.classList.contains('empty')) {
      this.textContent = currentPlayer;
      this.classList.remove('empty');
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  
  const resetButton = document.getElementById('reset-board');
  resetButton.addEventListener('click', reset);
  
  function reset() {
    makeBoard();
    currentPlayer = 'X';
  }
  
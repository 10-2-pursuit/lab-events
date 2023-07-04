document.addEventListener('DOMContentLoaded', function() {
  makeBoard();
});

function makeBoard() {
  var board = document.getElementById('board');
  board.innerHTML = '';
  for (var i = 0; i < 9; i++) {
    var square = document.createElement('div');
    square.classList.add('empty', 'square');
    board.appendChild(square);
  }
  
  var squares = document.getElementsByClassName('square');
  for (var j = 0; j < squares.length; j++) {
    squares[j].addEventListener('click', makeMove);
  }
}

var currentPlayer = 'X';

function makeMove() {
  if (this.classList.contains('empty')) {
    this.textContent = currentPlayer;
    this.classList.remove('empty');
  
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);

function reset() {
  makeBoard();
  currentPlayer = 'X';
}

document.addEventListener("DOMContentLoaded", makeBoard);
function makeBoard() {
  const ticTacToe = document.querySelector(".tic-tac-toe");
  ticTacToe.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("empty", "square");
    square.addEventListener("click", makeMove);
    ticTacToe.appendChild(square);
  }
}
function makeMove(event) {
  const square = event.target;
  if (!square.classList.contains("empty")) {
    return; // Square is already filled, do nothing
  }
  const currentPlayer = document.querySelector(".current-player");
  const symbol = currentPlayer.textContent;
  
  square.textContent = symbol;
  square.classList.remove("empty");
  currentPlayer.classList.toggle("current-player");
  if (symbol === "X") {
    currentPlayer.nextElementSibling.classList.add("current-player");
  } else {
    currentPlayer.previousElementSibling.classList.add("current-player");
  }
}
const resetButton = document.querySelector("button");
resetButton.addEventListener("click", reset);
function reset() {
  makeBoard();
}




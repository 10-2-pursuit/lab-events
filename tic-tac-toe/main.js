document.addEventListener("DOMContentLoaded", () => {
    makeBoard();
  });
  
  function makeBoard() {
    const board = document.getElementById("board");
    board.innerHTML = "";
  
    for (let i = 0; i < 3; i++) {
      const row = document.createElement("div");
      row.className = "row";
      board.appendChild(row);
  
      for (let j = 0; j < 3; j++) {
        const square = document.createElement("div");
        square.className = "square empty";
        square.addEventListener("click", makeMove);
        row.appendChild(square);
      }
    }
  }
  
  let currentPlayer = "X";
  
  function makeMove() {
    if (this.classList.contains("empty")) {
      this.textContent = currentPlayer;
      this.classList.remove("empty");
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
  
  const resetButton = document.getElementById("reset-board");
  resetButton.addEventListener("click", reset);
  
  function reset() {
    makeBoard();
    currentPlayer = "X";
  }
  
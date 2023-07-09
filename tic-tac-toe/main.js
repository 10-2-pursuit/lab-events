
function makeBoard() {
  let ticTacToe = document.querySelector(".tic-tac-toe");

  for (let i = 0; i < 9; i++) {
    let square = document.createElement("div");
    square.classList.add("empty", "square");

    square.addEventListener("click", function() {
      if (this.classList.contains("empty")) {
        console.log("Square is empty");
        makeMove(this);
      } else {
        console.log("Square is not empty");
      }
    });

    ticTacToe.appendChild(square);
  }
}

function reset() {
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.classList.add("empty");
    square.textContent = "";
  });
  isXPlayerTurn = true;
}

let resetButton = document.querySelector("button");
resetButton.addEventListener("click", reset);

function makeMove(square) {
  if (square.classList.contains("empty")) {
    if (isXPlayerTurn) {
      square.textContent = "X";
    } else {
      square.textContent = "O";
    }
    square.classList.remove("empty");
    isXPlayerTurn = !isXPlayerTurn;

    checkGameOver();
  }
}

let isXPlayerTurn = true;

makeBoard();


function checkGameOver(){
  let squares = document.getElementsByClassName("square");
  let isBoardFull= true;

  for(let i = 0; i < squares.length; i++){
    if(squares[i].classList.contains("empty")){
      isBoardFull = false;
      break;
    }
  }
  if(isBoardFull){
    alert("Game Over");
  }
}

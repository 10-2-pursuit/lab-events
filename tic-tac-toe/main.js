const makeBoard = () => {
    const tictactoeDiv = document.querySelector("div.tic-tac-toe");
    for (let i = 0; i < 9; i++) {
        const div = document.createElement("div");
        div.classList.add("empty");
        div.classList.add("square");
        tictactoeDiv.append(div);
    }
}

makeBoard();

const makeMove = () => {
    let playerTurn = 0;
    const squares = document.querySelectorAll(".square");
    for (let square of squares) {
        square.addEventListener("click", () => {
            if (square.classList.contains("empty")) {
                playerTurn++;
                if (playerTurn % 2 === 0) {
                    square.textContent = "X";
                    square.classList.remove("empty");
                } else {
                    square.textContent = "O";
                    square.classList.remove("empty");
                }
            }
        });
    }
}

makeMove();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    for (let square of squares) {
        square.remove();
    }
    makeBoard();
    makeMove();
});
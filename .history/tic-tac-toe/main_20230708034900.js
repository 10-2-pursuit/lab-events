function makeBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
    square.className = "square empty"        
    board.appendChild(row);
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

function makeMove(i, j) {
    const square = event.target;
    if (square.classList.contains('empty')) {
        const currentPlayer = document.querySelectorAll('.square:not(.empty)').length%2===0? "X": "O";
        square.textContent = currentPlayer;
        square.classList.remove('empty');
    }
}

function reset() {
    makeBoard();
}

const resetButton = document.getElementById('reset-button');
squares.forEach(square => {
    square.addEventListener("click": makeMove);
    });
let xTurn = 1

function makeBoard () {
    let board = document.getElementsByClassName('tic-tac-toe')[0]
    for(let i = 0; i < 9; i++) {
        let newSquare = document.createElement('div')
        newSquare.classList.add("square","empty")

        newSquare.addEventListener("click", makeMove)

        board.append(newSquare)
    }

}


function makeMove(e) {
    isEmpty = e.target.classList[1] == "empty"
    // console.log(e.target.classList)
    if(isEmpty){
        e.target.classList.toggle("empty")
        if (xTurn % 2) {
            e.target.innerText = "X"
            console.log(checkWin("X"))
        } else {
            e.target.innerText = "O"
            console.log(checkWin("O"))
        }
        xTurn++
    }

    if(checkWin("X")){
        console.log("game")
        endGame("X wins. HUZZAH")
    }else if(checkWin("Y")){
        console.log("game")
        endGame("Y wins. BOOYAH")
    } else if(xTurn > 9){
       endGame("Game Over. Tie Game.")
    }
}


makeBoard()

function endGame (message){
    let board = document.getElementsByClassName('tic-tac-toe')[0]
    let gameOver = document.createElement("div")
    gameOver.innerText = message

    board.append(gameOver)

    window.confirm(message)
}

function checkWin (letter){
    board = document.getElementsByClassName("square")
    let grid = [[],[],[]]
    
    for(i = 0; i < 9; i++){
        grid[Math.floor(i/3)].push(board[i].innerText)
    }
    
    
    let wins = [1,1,1,1,1,1,1,1]
    
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++) {
            if (grid[i][j] != letter){
                // console.log(letter,grid[i][j])
                wins[i] = 0
            }
        }
    }

    for(let k = 0; k < 3; k++){
        for(let l = 0; l < 3; l++) {
            if (grid[l][k] != letter){
                wins[k+3] = 0
            }
        }
    }
    
    if (grid[0][0] == letter && grid[1][1] == letter && grid[2][2] == letter) {
    } else {
        wins[6] = 0
    }

    if (grid[2][0] == letter && grid[1][1] == letter && grid[0][2] == letter) {
    } else {
        wins[7] = 0
    }


    return wins.includes(1) ? true : false
    
}

resetButton = document.querySelector("button")

resetButton.addEventListener("click", () => {
    xTurn = 1
    let board = document.getElementsByClassName("tic-tac-toe")[0]

     for(square of board.querySelectorAll("div")){
        isEmpty = square.classList[1] == "empty"
        if(!isEmpty){
            square.classList.toggle("empty")
            square.innerText = ""
        }
    }

})
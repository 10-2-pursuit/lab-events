function makeBoard(){
       let ticTacToe = document.getElementsByClassName("tic-tac-toe");
       
       for (let i =0; i < 9; i++) {
        let div = document.createElement("div");
        div.className = "empty square";
        ticTacToe.appendChild(div);



        //   x[i].style.display = "none";
        }
      }
      makeBoard();
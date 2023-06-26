function makeBoard(){
       let ticTacToe = document.getElementsByClassName("tic-tac-toe")[0];
       
       for (let i =0; i < 9; i++) {
        let square = document.createElement("div");
        square.classList.add ("empty", "square");

        square.addEventListener("click")
        ticTacToe.append(square);

        }
      }
     
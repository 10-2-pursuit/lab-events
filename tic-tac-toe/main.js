function makeBoard(){
       let ticTacToe = document.getElementsByClassName("tic-tac-toe")[0];
       
       for (let i =0; i < 9; i++) {
        let square = document.createElement("div");
        square.classList.add ("empty", "square");

        square.addEventListener("click",function() {
          if(this.classList.contains('empty','square')){
            console.log("square is empty");

          }else{
            console.log("square is not empty");
          }
        });
        ticTacToe.appendChild(square); 

       }
      }

function reset(){
  let ticTacToe = document.getElementsByClassName("tic-tac-toe")[0];
  while(ticTacToe.firstChild){
    ticTacToe.removeChild(ticTacToe.firstChild);
  }
      makeBoard(); 
}

      let resetButton = document.getElementById("reset-button");
      resetButton.addEventListener("click", Reset);


      function makeMove(){
        if(this.classList.contains("empty")){
          if(isXPlayerTurn){
            this.textContent = 'X';
          }else{
            this.textContent = 'O';
          }
          this.classList.remove('empty');
          isXPlayerTurn = !isXPlayerTurn;
        }
      }
      let isXPlayerTurn = true; 

      let squares = document.getElementsByClassName("square");
      for (let i = 0; i < squares.length; i ++){
        squares[i].addEventListener("click", makeMove)
      };

    
      
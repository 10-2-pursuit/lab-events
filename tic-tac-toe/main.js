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
      makeBoard(); 
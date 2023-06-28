function makeBoard() {
	const boardElement = document.getElementById('board')
	for (let i = 0; i < 10; i++) {
		const square = document.createElement('div');
		square.classList.add('square', 'empty');
		square.style.background = "white";
		boardElement.appendChild(square);
	  }
	}
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const palette = document.getElementById('palette');
    const currentColor = document.getElementById('current-color');
  
    let selectedColor = 'black';
  
    function createCell() {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('click', function() {
        this.style.backgroundColor = selectedColor;
      });
      return cell;
    }
  
    for (let i = 0; i < 100; i++) {
      const cell = createCell();
      canvas.appendChild(cell);
    }
  
    function setCurrentColor(color) {
      currentColor.style.backgroundColor = color;
      selectedColor = color;
    }
  
    const colors = document.getElementsByClassName('color');
    for (let i = 0; i < colors.length; i++) {
      colors[i].addEventListener('click', function() {
        const color = this.style.backgroundColor;
        setCurrentColor(color);
      });
    }
  
    setCurrentColor('black');
  });
  
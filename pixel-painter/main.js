const canvas = document.querySelector('main');

// Create the grid
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // Create a new cell element
    const cell = document.createElement('div');
    cell.classList.add('cell');

    // Add the cell to the grid container
    canvas.appendChild(cell);
  }
}

// const colors = document.querySelectorAll(".color")

const paletteColors = document.querySelectorAll("#palette .color");
const currentColor = document.querySelector("#current-color");

paletteColors.forEach((color) => {
    color.addEventListener("click", () => {
        currentColor.style.background = color.style.background
    });
});

const cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
    cell.addEventListener ("mouseover", () => {
    cell.style.background = currentColor.style.background;
    }); 
});


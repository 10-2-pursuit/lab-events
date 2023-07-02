// loop thru div or items to create grid Element
// changes current color when a color is clicked in palette
const canvas = document.querySelector("main")
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            canvas.appendChild(cell)
        }
    }

    const paletteColors = document.querySelectorAll("#palette .color");
    const currentColor = document.querySelector("#current-color");
    
    paletteColors.forEach((color) => {
      color.addEventListener("click", () => {
        currentColor.style.background = color.style.background 
      });
    });
    
    
    const cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        cell.style.background = currentColor.style.background 
      });
    });

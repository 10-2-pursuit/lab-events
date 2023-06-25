const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}


const colors = document.querySelectorAll(".color");

for (let color of colors) {
    color.addEventListener("click", (e) => {
        const currentColor = e.target.parentNode.parentNode.querySelector("#current-color");
        currentColor.style.background = e.target.style.background;
    });
}

const cells = document.querySelectorAll(".cell");

for (let cell of cells) {
    cell.addEventListener("mousedown", (e) => {
        const currentColor = e.target.parentNode.parentNode.querySelector("#current-color");
        e.target.style.background = currentColor.style.background;
    });
}

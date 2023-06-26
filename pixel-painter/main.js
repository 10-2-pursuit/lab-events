




let color = document.getElementById("palette").div.currentColor;

console.log(palette.div.color)










const colorButtons = document.querySelectorAll(".color");

for (let button of colorButtons) {
  button.addEventListener("click", (event) => {
    const currentColors = event.target.childNode.querySelector(".palette");
    currentColors.textConte += "❤";
  });
}







// const clickColor = document.querySelectorAll(".click");

// for(let color of clickColor){
//   color.addEventListener("click", (event) => {
//     console.log(event.target)
//   const paletteColor = e.target.childNode.querySelector(".palette");
//   colors.textContent = "current-color";

//   if the pallette color is clicked, current color changes 
// });
// }
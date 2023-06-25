

let currentColorCell = document.getElementById("current-color")


// currentColorCell.setAttribute("style",
// "background: red")

let palette = document.getElementById("palette")
let paletteArray = palette.querySelectorAll("div")

let canvas = document.getElementById("canvas")

for (color of paletteArray){
    color.addEventListener("click", (e) => {
        let newColor = e.target.getAttribute("style")
        currentColorCell.setAttribute("style", newColor)
    })
}


for(let i = 0; i < 100; i++) {
    let newCell = document.createElement('div')
    newCell.setAttribute("class", "cell")
    canvas.append(newCell)
}

for(cell of canvas.querySelectorAll("div")){
    cell.isMouse = 0
    cell.addEventListener("mousedown", (e) => {
        cell.isMouse = 1
        let newColor = currentColorCell.getAttribute("style")
        e.target.setAttribute("style", newColor)
    })
    
    cell.addEventListener("mouseup", () => {
        cell.isMouse = 0
        console.log("up")
    })

    cell.addEventListener("mouseover", (e) => {
        let newColor = currentColorCell.getAttribute("style")
        if(cell.isMouse == 1) {      
            e.target.setAttribute("style", newColor)
        }
    })
}




console.log(paletteArray)


// document.querySelectorAll()
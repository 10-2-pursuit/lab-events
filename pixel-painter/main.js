const colors = document.querySelectorAll('.color');

for(let color of colors){
    color.addEventListener("click", (event) => {
        const currentColor = document.getElementById("current-color");
        currentColor.style.backgroundColor = color.style.backgroundColor;
    });
}

const canvas = document.querySelector('main');
for(let index = 0; index < 100; index++){
    const cell = document.createElement('div');
    cell.setAttribute('id', `cell${index}`);
    cell.setAttribute('class', 'cell');
    cell.addEventListener("click",(event)=>{
        const currentColor = document.getElementById("current-color");
        cell.style.backgroundColor = currentColor.style.backgroundColor;
    })
    canvas.append(cell);
}

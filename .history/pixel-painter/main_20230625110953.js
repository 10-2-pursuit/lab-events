const main = document.querySelector('main');
 for (let i = 0; i < 100; i++) {
   const pixel = document.createElement('div');
   pixel.classList.add('pixel');
   main.append(pixel);
 }
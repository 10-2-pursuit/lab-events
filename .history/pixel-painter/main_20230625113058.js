const main = document.querySelector('main');

for (let i = 0; i < 100; i++) {
  const div = document.createElement('.wrapper');
  div.classList.add('grid');
  main.appendChild(div);
}
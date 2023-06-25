const canvas = document.getElementById('canvas');

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  canvas.appendChild(cell);
}

const color = document.querySelector(' div').style.background
document.querySelectorAll('#palette div').forEach((div) => {
    div.addEventListener('click', selectColor => {
        document.querySelector('#current-color').style.background = selectColor.target.style.background;
    });
    })

    document.querySelectorAll('.cell').forEach((cell) => {
        cell.addEventListener('click', selectedCell => {
            selectedCell.target.style.background = document.querySelector('#current-color').style.background;
        });
        })

        const colorPalette = document.querySelectorAll('#palette div');
        const currentColor = document.querySelector('#current-color');

// Create two buttons in two div elements within a larger div element within ab section with id controls:

const controlsSection = document.createElement('section');
controlsSection.id = 'controls';

const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';

const resetButtonContainer = document.createElement('div');
resetButtonContainer.id = 'reset-button';
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Button';
resetButtonContainer.appendChild(resetButton);

const fillButtonContainer = document.createElement('div');
fillButtonContainer.id = 'fill-button';
const fillButton = document.createElement('button');
fillButton.textContent = 'Fill Button';
fillButtonContainer.appendChild(fillButton);

buttonContainer.appendChild(resetButtonContainer);
buttonContainer.appendChild(fillButtonContainer)
controlsSection.appendChild(buttonContainer);
document.body.appendChild(controlsSection);


// Center both bottons tha and have them flex based on the size of the screen also center 

buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';
buttonContainer.style.marginTop = '20px';

// Apply margin between the buttons
resetButton.style.marginRight = '10px';

// Apply additional styling as needed

// Add event listeners to the buttons
resetButton.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.style.background = 'white';
    });
  });

fillButton.addEventListener('click', () => {
  const colorToFill = currentColor.style.background;
  document.querySelectorAll('.cell').forEach((cell) => 
    cell.style.background = colorToFill);
  });

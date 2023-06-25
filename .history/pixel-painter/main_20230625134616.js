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

// Create the controls section
const controlsSection = document.createElement('section');
controlsSection.id = 'controls';

// Create the button container
const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';

// Create the reset button
const resetButtonContainer = document.createElement('div');
resetButtonContainer.id = 'reset-button';
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Button';
resetButtonContainer.appendChild(resetButton);

// Create the fill button
const fillButtonContainer = document.createElement('div');
fillButtonContainer.id = 'fill-button';
const fillButton = document.createElement('button');
fillButton.textContent = 'Fill Button';
fillButtonContainer.appendChild(fillButton);

// Append the button containers to the button container
buttonContainer.appendChild(resetButtonContainer);
buttonContainer.appendChild(fillButtonContainer);

// Append the button container to the controls section
controlsSection.appendChild(buttonContainer);

// Append the controls section to the document body
document.body.appendChild(controlsSection);


// Apply CSS styles to center the buttons in the container
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';
buttonContainer.style.marginTop = '20px';

// Apply margin between the buttons
resetButton.style.marginRight = '10px';

// Apply additional styling as needed

// Add event listeners to the buttons
resetButton.addEventListener('click', () => {
  // Reset button click logic
});

fillButton.addEventListener('click', () => {
  // Fill button click logic
});

        const resetButton = document.getElementById('reset-button');
        resetButton.addEventListener('click', () => {
            document.querySelectorAll('.cell').forEach((cell) => {
              cell.style.background = 'white';
            });
          });


          const fillButton = document.getElementById('fill-button');  
          fillButton.addEventListener('click', () => {
            const colorToFill = currentColor.style.background;
            document.querySelectorAll('.cell').forEach((cell) => {
              cell.style.background = colorToFill;
            });
          });
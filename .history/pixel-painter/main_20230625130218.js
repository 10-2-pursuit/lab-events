resetButton.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.style.background = 'white';
    });
  });
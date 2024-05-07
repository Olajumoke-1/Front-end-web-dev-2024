const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// // Add event listener here
closedFace.addEventListener('click', () => {
    closedFace. classList.add('hidden');
    openFace. classList.remove('hidden');
});

// Event listener for openFace element
openFace.addEventListener('click', () => {
    openFace. classList.add('hidden');
    closedFace. classList.remove('hidden');
});

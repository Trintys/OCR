const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');

buttonOne.addEventListener('click', () => {
  window.location.href = 'oneFileUpload.html'; // Replace with the actual URL you want to redirect to
});

buttonTwo.addEventListener('click', () => {
  window.location.href = 'multipleFilesUpload.html'; // Add .html extension
});
// select the toggle button and body
const toggleButton = document.getElementsByClassName('toggle-button');
const body = document.body;

// add click event listener to toggle the background color
toggleButton[0].addEventListener('click', () => {
    body.classList.toggle('pastel-blue'); // toggle the pastel blue class
});

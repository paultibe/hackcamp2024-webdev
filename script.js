const toggleButton = document.getElementsByClassName('toggle-button');
const body = document.body;

toggleButton[0].addEventListener('click', () => {
    body.classList.toggle('spotify-purple'); 
});

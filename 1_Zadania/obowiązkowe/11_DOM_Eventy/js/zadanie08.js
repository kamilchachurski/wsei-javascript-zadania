window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#windowWidth').innerHTML = window.innerWidth;
    document.querySelector('#windowHeight').innerHTML = window.innerHeight;
});

window.addEventListener('resize', () => {
    document.querySelector('#windowWidth').innerHTML = window.innerWidth;
    document.querySelector('#windowHeight').innerHTML = window.innerHeight;
});
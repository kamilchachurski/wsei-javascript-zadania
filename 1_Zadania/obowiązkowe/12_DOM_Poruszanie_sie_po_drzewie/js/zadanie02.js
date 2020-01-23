window.addEventListener('DOMContentLoaded', () => {
    for (let element of document.querySelectorAll('a')) {
        element.addEventListener('click', function() {
            this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    }
});
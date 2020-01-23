window.addEventListener('DOMContentLoaded', () => {
    for(let div of document.querySelectorAll('div')) {
        div.addEventListener('click', function() {
            this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    }
});
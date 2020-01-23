window.addEventListener('DOMContentLoaded', () => {
    for(let button of document.querySelectorAll('button')) {
        button.addEventListener('click', function() {
            document.querySelector('.counter').innerHTML++;
        });
    }
});
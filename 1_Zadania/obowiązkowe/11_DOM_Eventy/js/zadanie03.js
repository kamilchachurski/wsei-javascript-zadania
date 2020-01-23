window.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < document.querySelectorAll('button').length; i++) {
        document.querySelectorAll('button')[i].addEventListener('click', function() {
            document.querySelectorAll('.counter')[i].innerHTML++;
        });
    }
});
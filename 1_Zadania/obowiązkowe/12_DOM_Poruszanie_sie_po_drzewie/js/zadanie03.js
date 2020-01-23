window.addEventListener('DOMContentLoaded', () => {
    for (let element of document.querySelectorAll('div')) {
        element.addEventListener('mouseenter', function() {
            this.querySelectorAll('li')[0].style.backgroundColor = 'red';
            this.querySelectorAll('li')[1].style.backgroundColor = 'blue';
            this.querySelectorAll('li')[2].style.backgroundColor = 'green';
        });
    }
});
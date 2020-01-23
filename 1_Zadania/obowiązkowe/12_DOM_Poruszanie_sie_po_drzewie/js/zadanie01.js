window.addEventListener('DOMContentLoaded', () => {
    for (let element of document.querySelectorAll('a')) {
        element.addEventListener('click', function() {
            let nextSibling = this.nextElementSibling;

            if (nextSibling) {
                ((nextSibling.style.display === '') || (nextSibling.style.display === 'block'))
                    ? (nextSibling.style.display = 'none')
                    : (nextSibling.style.display = 'block');
            }
        });
    }
});
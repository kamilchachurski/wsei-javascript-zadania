window.addEventListener('DOMContentLoaded', () => {
    for(let element of document.querySelectorAll('.deleteBtn')) {
        element.addEventListener('click', function() {
            this.parentElement.parentElement.remove();
        });
    }
});
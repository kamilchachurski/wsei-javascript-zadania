window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#remove').addEventListener('click', function() {
        document.querySelector('.list').innerHTML = '';
    });
});
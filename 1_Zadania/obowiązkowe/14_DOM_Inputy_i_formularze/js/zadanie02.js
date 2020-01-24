window.addEventListener('DOMContentLoaded', () => {
    toggleImages();
    
    document.querySelector('.form-control').addEventListener('change', () => {
        toggleImages();
    });

    function toggleImages() {
        for(let element of document.querySelectorAll('img')) {
            (element.alt === document.querySelector('.form-control').value)
                ? (element.style.display = 'block')
                : (element.style.display = 'none');

            ((element.alt == 'Apple') && (document.querySelector('.form-control').value == 'Os X'))
                && (element.style.display = 'block');
        }
    }
});
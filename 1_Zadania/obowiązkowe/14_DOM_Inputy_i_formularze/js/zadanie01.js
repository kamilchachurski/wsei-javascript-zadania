window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#invoiceData').style.display = 'none';

    document.querySelector('#invoice').addEventListener('change', () => {
        document.querySelector('#invoice').checked
            ? document.querySelector('#invoiceData').style.display = 'block'
            : document.querySelector('#invoiceData').style.display = 'none';
    });
});
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#name').addEventListener('input', function() {
        if (/^4/.test(this.value)) {
            document.querySelector('#type').innerHTML = 'Visa';
        } else if (/^5/.test(this.value)) {
            document.querySelector('#type').innerHTML = 'Mastercard';
        } else if (/^3[47]/.test(this.value)) {
            document.querySelector('#type').innerHTML = 'American Express';
        } else {
            document.querySelector('#type').innerHTML = '';
        }

        if ((document.querySelector('#type').innerHTML === 'Visa') && ((this.value.length >= 13) || (this.value.length <= 16))) {
            this.style.border = '1px solid green';
        } else if ((document.querySelector('#type').innerHTML === 'Mastercard') && (this.value.length === 16)) {
            this.style.border = '1px solid green';
        } else if ((document.querySelector('#type').innerHTML === 'American Express') && (this.value.length === 15)) {
            this.style.border = '1px solid green';
        } else {
            this.style.border = '1px solid red';
        }
    });
});
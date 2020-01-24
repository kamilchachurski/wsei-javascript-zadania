window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', function() {
        const error = document.querySelector('.error-message');

        if(!document.querySelector('#email').value.includes('@')) {
            event.preventDefault();
            error.innerHTML = "Email musi posiadać znak @";
        }

        if(document.querySelector('#name').value.length < 6) {
            event.preventDefault();
            error.innerHTML = "Twoje imię jest za krótkie";
        }
        
        if(document.querySelector('#surname').value.length < 6) {
            event.preventDefault();
            error.innerHTML = "Twoje nazwisko jest za krótkie";
        }
        
        if(!(document.querySelector('#pass1').value && (document.querySelector('pass2').value === document.querySelector('pass2').value))) {
            event.preventDefault();
            error.innerHTML = "Hasła nie są takie same lub puste";
        }
        
        if(!document.querySelector('#agree').checked) {
            event.preventDefault();
            error.innerHTML = "Musisz zaakceptować warunki";
        }
    });
});
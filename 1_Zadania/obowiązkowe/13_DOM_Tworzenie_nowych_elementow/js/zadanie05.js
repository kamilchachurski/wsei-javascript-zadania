window.addEventListener('DOMContentLoaded', () => {
    for(let element of document.querySelectorAll('.moveBtn')) {
        element.addEventListener('click', function() {
            (this.parentElement.parentElement.id === 'list1')
                ? document.querySelector('#list2').appendChild(this.parentElement)
                : document.querySelector('#list1').appendChild(this.parentElement);
        });
    }
});
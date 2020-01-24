window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.button').addEventListener('click', () => {
        let li = document.createElement('li');

        li.innerText = document.querySelector('.menu').children.length;

        document.querySelector('.menu').appendChild(li);
    });
});
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();

        if((document.querySelector('#team1').value != document.querySelector('#team2').value) && (parseInt(document.querySelector('#points1').value) >= 0) && (parseInt(document.querySelector('#points2').value) >= 0)) {
            let tr = document.querySelector('.table').querySelectorAll('tr')[document.querySelector('.table').querySelectorAll('tr').length - 1].cloneNode(true);

            tr.children[0].innerText = document.querySelector('#team1').value;
            tr.children[1].innerText = document.querySelector('#team2').value;
            tr.children[2].innerText = `${ document.querySelector('#points1').value } - ${ document.querySelector('#points2').value }`;

            document.querySelector('.table').querySelector('tr').parentElement.appendChild(tr);
        }
    });
});
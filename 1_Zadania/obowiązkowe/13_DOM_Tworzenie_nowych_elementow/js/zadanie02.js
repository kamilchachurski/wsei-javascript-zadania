window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#addBtn').addEventListener('click', () => {
        let tr = document.querySelector('#orders').querySelector('tr').cloneNode(true);

        tr.children[0].innerText = document.querySelector('#orderId').value;
        tr.children[1].innerText = document.querySelector('#item').value;
        tr.children[2].innerText = document.querySelector('#quantity').value;

        document.querySelector('#orders').appendChild(tr);
    });
});
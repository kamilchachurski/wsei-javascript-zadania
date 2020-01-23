window.addEventListener('DOMContentLoaded', () =>
{
    document.querySelector('#box').addEventListener('mousemove', function(event) {
        document.querySelector('#localX').innerHTML = event.pageX - this.offsetLeft;
        document.querySelector('#localY').innerHTML = event.pageY - this.offsetTop;
        document.querySelector('#globalX').innerHTML = event.pageX;
        document.querySelector('#globalY').innerHTML = event.pageY;
    });
});
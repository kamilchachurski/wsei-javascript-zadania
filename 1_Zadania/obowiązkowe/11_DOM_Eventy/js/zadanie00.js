for(let i = 0; i < document.querySelectorAll('.parent').length; i++) {
    document.querySelectorAll('.parent')[i].addEventListener('mouseenter', () => {
        document.querySelectorAll('.children')[i].style.display = 'block';
    });

    /*document.querySelectorAll('.parent')[i].addEventListener('mouseleave', () => {
        document.querySelectorAll('.children')[i].style.display = 'none';
    });*/

    document.querySelectorAll('.parent')[i].addEventListener('mouseleave', function() {
        function hideChildrenElement() {
            this.querySelector('.children').style.display = 'none';
        }

        hideChildrenElement.call(this);
    });
}
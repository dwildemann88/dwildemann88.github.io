let navResponsive = document.querySelector('.responsive-nav')
let isRotated = false
let isNavVisible = false
navResponsive.addEventListener('click', function() {
    let menuSelection = document.querySelector('.navegationResponsive')
    if (!isRotated) {
        let lineResponvsive0 = document.querySelectorAll('.line')[0];
        lineResponvsive0.style.transform = 'rotate(45deg)';
        let lineResponvsive1 = document.querySelectorAll('.line')[1];
        lineResponvsive1.style.display = 'none';
        let lineResponvsive2 = document.querySelectorAll('.line')[2];
        lineResponvsive2.style.transform = 'rotate(-45deg)';
        lineResponvsive2.style.marginTop = '-5px';
        isRotated = true;
    } else {
        let lineResponvsive0 = document.querySelectorAll('.line')[0];
        lineResponvsive0.style.transform = '';
        let lineResponvsive1 = document.querySelectorAll('.line')[1];
        lineResponvsive1.style.display = '';
        let lineResponvsive2 = document.querySelectorAll('.line')[2];
        lineResponvsive2.style.transform = '';
        lineResponvsive2.style.marginTop = '';
        isRotated = false;
    }
    if (!isNavVisible) {
        menuSelection.style.display = 'block';
        isNavVisible = true;
    } else {
        menuSelection.style.display = 'none';
        isNavVisible = false;
    }
});




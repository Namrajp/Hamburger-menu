const hamburg_btn  = document.getElementById('hamburg-btn');
const overlay  = document.getElementById('overlay');
const header = document.querySelector('header');

hamburg_btn.addEventListener('click', function() {
    if (hamburg_btn.classList.contains('open')) {
        hamburg_btn.classList.remove('open')
    }
    else {
        hamburg_btn.classList.add('open');
        

    }
})
hamburg_btn.addEventListener('click', function() {
    if(overlay.classList.contains('header__overlay') ) {
        overlay.classList.remove('header__overlay');
        header.classList.add('mobile');
    }
    else {
        overlay.classList.add('header__overlay');
        header.classList.remove('mobile');

    }
})


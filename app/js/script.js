const hamburg_btn  = document.getElementById('hamburg-btn');
hamburg_btn.addEventListener('click', function() {
    if (hamburg_btn.classList.contains('open')) {
        hamburg_btn.classList.remove('open')
    }
    else {
        hamburg_btn.classList.add('open');
    }
})
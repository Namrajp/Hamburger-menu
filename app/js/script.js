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

/* Selecting the Nav menu with pseudo elements before border/ And 
 list items li are better than just links a for querySelectorAll so, replacing just div>a's using ul>li>a*/
const list = document.querySelector('.header__links')
const links = list.querySelectorAll('.nav-link');
var current = document.getElementsByClassName("active");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        current[0].className = 
        current[0].className.replace("active", "");
        // current[0].classList.remove('active');
        this.classList.add('active');
    })
}



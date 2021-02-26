// fetch("./header.html")
//   .then(response => {
//     return response.text();
//   })
//   .then(data => {
//     document.querySelector("header").innerHTML = data;
//   });

// fetch("./footer.html")
//   .then(response => {
//     return response.text()
//   })
//   .then(data => {
//     document.querySelector("footer").innerHTML = data;
//   });

  // $("#insert_header").load("header.html");

  // (function() {
  //   var nav = document.getElementById('nav'),
  //       anchor = nav.getElementsByTagName('a'),
  //       current = window.location.pathname.split('/')[1];
        
  //       for (var i = 0; i < anchor.length; i++) {

  //       if(anchor[i].href == current) {
  //           anchor[i].className = "active";
  //       }
  //   }
  // })();



/* Selecting the Nav menu with pseudo elements before border/ And 
 list items li are better than just links a for querySelectorAll so, replacing just a's using*/
// const list = document.querySelector('.header__links');
// const links = list.getElementsByTagName('a');
// var current = document.getElementsByClassName("active");

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function() {
//         // current[0].className = 
//         // current[0].className.replace("active", "");
//         if (current[0].classList == undefined) {
//           this.classList.add('active');

//         }
//         current[0].classList.remove('active');
//         this.classList.add('active');

//     })
// }
// const navbar = document.querySelector('.header');
// const current_location = location.href;
// const nav_links = document.getElementsByClassName('nav-link');
// const this_length = nav_links.length;
// console.log(nav_links);

// for (let p=0; p < this_length; p++) {

//   if (nav_links[p].href === current_location) {   // href attribute links to of href as location 
//       nav_links[p].className = 'active';
//   }  
// };
// console.log('this_length');



// $(".header__links a").click(function(){
//   $("body,html").animate({
//    scrollTop:$("#" + $(this).data('value')).offset().top
//   },1000)
  
//  })

// https://www.freecodecamp.org/news/learn-bootstrap-4-in-30-minute-by-building-a-landing-page-website-guide-for-beginners-f64e03833f33/#the-new-features-of-bootstrap-4
const current_location = location.href;  // URL of curent page as displayed on address bar 
const links = document.getElementsByClassName('nav-link');  // Array of anchor elements in li
this_length = links.length;  // length of Array
for (let p=0; p < this_length; p++) {

    if (links[p].href === current_location) {   // href attribute links to of href as location 
        links[p].classList.add('active');
    }
}


const hamburg_btn  = document.getElementById('hamburg-btn');
const overlay  = document.getElementById('overlay');
const header = document.querySelector('header');

hamburg_btn.addEventListener('click', function() {
    if (hamburg_btn.classList.contains('open')) {
        hamburg_btn.classList.remove('open');
        header.classList.remove('mobile');
    }
    else {
        hamburg_btn.classList.add('open');
        header.classList.add('mobile');
    }
})




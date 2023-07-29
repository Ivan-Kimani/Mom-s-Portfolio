/*scroll section active links*/
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll =() =>{
section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


if(top >=offset && top < offset + height){
navlinks.forEach(links =>{
    links.classList.remove('active');
    document.querySelector('header nav a[href='+ id + ']').classList.add('active');
})
}

})
/*Sticky navbar*/ 



let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100)
}


/*Responsive*/
let menuIcon = document.querySelector('.bx i');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-solid fa-x');
    navbar.classList.toggle('active');
}



/*scroll reveal*/ 

ScrollReveal({
     reset: true,
     distance:'80px' ,
     duration:2000,
     delay:200
    });



ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img img, .services-container, .contact', { origin: 'bottom' });
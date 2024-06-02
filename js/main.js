/* Toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

/* Scroll section active link*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        console.log("Top ->" + top)
        console.log("offset ->" + offset)
        console.log("height ->" + height)
        console.log("Nombre de Id ->" + id)

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        }
    });

    /*stiky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('stiky', window.scrollY > 100);

    /*remoce toggle icon and navbar when click*/
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
    
};

//scroll relavete
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.begin-content, .heading', { origin: 'top' });

ScrollReveal().reveal(
    '.begin-img, .btn, p, .card, .youtube, .facebook, .course-box, .social-networks', 
    { origin: 'bottom' }
);

// TExto multile dinmico 
const typed = new Typed('.multiple-text',{
    strings: ['HTML y CSS', 'JavaScript', 'Python', 'Golang', 'Java'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




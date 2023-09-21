let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Add sticky class to header when scrolling down
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Add event listener to navbar links to close the menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


ScrollReveal({ 
    
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200 
});

ScrollReveal().reveal('.home-content ,.heading', { origin:'top' });
ScrollReveal().reveal('.Home-img, .services-container, .protfolio-box , .contant', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1 ,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p ,.about-content', { origin:'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'INFORMATION TECHNOLOGY Student', ], // Use "strings" instead of "String" for the array of strings
    typeSpeed: 100, // Corrected to "typeSpeed" (note lowercase "t")
    backSpeed: 100,
    backDelay: 1000,
    loop: true, // "ture" should be "true"
  });
  
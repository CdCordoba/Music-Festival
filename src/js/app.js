console.log('ready!');
document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();
});

function navegacionFija() {

    const navBar = document.querySelector('.header');

    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            navBar.classList.remove('fijo');
        } else {
            navBar.classList.add('fijo');
        }
    });

    // Elemento a observar
    observer.observe(document.querySelector('.festival'));
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.main-nav a');

    enlaces.forEach( function( enlace ) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
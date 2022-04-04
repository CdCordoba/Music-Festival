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
document.addEventListener('DOMContentLoaded', function() {
    makeGallery();
});

function makeGallery(){
    const gallery = document.querySelector('.gallery-images');
    for(let i = 1; i <= 12; i++) {
        const image = document.createElement('IMG');
        image.src = `build/img/thumb/${i}.webp`;
        image.dataset.imageId = i;
        image.onclick = showImage;
        image.classList.add('gallery-images__e')

        const list = document.createElement('LI');
        list.appendChild(image);

        gallery.appendChild(list); 
    } 
}

function showImage(e) {
    const id = parseInt(e.target.dataset.imageId);
    //Create Image
    const image = document.createElement('IMG');
    image.src = `build/img/grande/${id}.webp`;
    
    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay')
    image.classList.add('overlay__image')


    //Button to close the image
    const closeImage = document.createElement('P');
    closeImage.textContent = 'X';
    closeImage.classList.add('close-btn');

    //Close when clicks 
    overlay.onclick = function () {
        overlay.remove();
        body.classList.remove('fix-body')
    } 
    

    overlay.appendChild(closeImage);


    //Show in HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fix-body')
}
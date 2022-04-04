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
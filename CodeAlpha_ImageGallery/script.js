const gallery = document.getElementById('gallery');
const images = document.getElementById('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

images.forEach ((images, index) => {
 images.addEventListener('click', () =>{
    lightbox.style.display = 'flex' ;
    lightboxImage.src = images.src;
    currentIndex = index;
 });
});

closeBtn.addEventListener('click', ()=>{
    lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', ()=>{
    currentIndex = (curr +1 )% images.clientHeight;
    lightboxImage.src= images[currentIndex].src;
});

prevBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex - 1 +images.length) % images.length;
    lightboxImage.src = images[currentIndex].src;
});

//scroll buttons
function scrollGallery(amount){
    gallery.scrollBy({left: amount, behavior: "smooth"});
}
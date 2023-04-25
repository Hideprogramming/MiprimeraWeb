document.querySelector('.gallery-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-gallery').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', { delay: 500});
ScrollReveal().reveal('.cards-banner-one', { delay: 500});
ScrollReveal().reveal('.cards-banner-two', { delay: 500});

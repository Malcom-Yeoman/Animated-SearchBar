// Lorsqu'on clique sur la search-box originale
document.querySelector('.search-box').addEventListener('click', function(e) {
    const animatedBox = document.getElementById('animatedSearchBox');
    
    // Empêcher l'événement click de se propager au document
    e.stopPropagation();

    // Si le bloc est caché, le montrer. Sinon, le cacher.
    if (animatedBox.style.visibility === "hidden" || !animatedBox.style.visibility) {
        animatedBox.classList.add('show-animated-search-box');
    } else {
        animatedBox.classList.remove('show-animated-search-box');
    }
});

// Lorsqu'on clique en dehors de la search-box et de la animated-search-box
document.addEventListener('click', function(e) {
    const animatedBox = document.getElementById('animatedSearchBox');
    const searchBox = document.querySelector('.search-box');

    // Si l'utilisateur clique en dehors de la search-box et de la animated-search-box, fermer la animated-search-box
    if (!searchBox.contains(e.target) && !animatedBox.contains(e.target)) {
        animatedBox.classList.remove('show-animated-search-box');
    }
});
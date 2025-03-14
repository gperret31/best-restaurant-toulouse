// JavaScript pour améliorer l'expérience utilisateur

document.addEventListener('DOMContentLoaded', function() {
    // Animation pour l'apparition de la carte restaurant
    const restaurantCard = document.querySelector('.restaurant-card');
    setTimeout(() => {
        restaurantCard.style.opacity = '1';
        restaurantCard.style.transform = 'translateY(0)';
    }, 300);
    
    // Fonction pour vérifier si un élément est visible dans le viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Animation lors du défilement
    function handleScrollAnimations() {
        const aboutSection = document.querySelector('.about');
        if (isElementInViewport(aboutSection)) {
            aboutSection.classList.add('visible');
        }
    }
    
    // Écouteur d'événement pour le défilement
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Vérifier une première fois au chargement de la page
    handleScrollAnimations();
});
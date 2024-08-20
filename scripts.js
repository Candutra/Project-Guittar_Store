document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded');

    // Animação do banner ao passar o mouse
    const bannerImg = document.querySelector('.banner img');

    bannerImg.addEventListener('mouseover', () => {
        gsap.to(bannerImg, {
            duration: 1,
            scale: 1.01,
            ease: "power2.out"
        });
    });

    bannerImg.addEventListener('mouseout', () => {
        gsap.to(bannerImg, {
            duration: 1,
            scale: 1,
            ease: "power2.out"
        });
    });
});

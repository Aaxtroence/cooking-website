document.addEventListener("DOMContentLoaded", function () {
    const element = document.body;
    let posX = 0;
    let posY = 0;
    const speed = 0.1;

    function animateBackground() {
        posX += speed;
        posY += speed;
        element.style.backgroundPosition = `${posX}px ${posY}px`;
        requestAnimationFrame(animateBackground);
    }
    animateBackground();
});

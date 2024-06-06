document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Scale the image to zoom in on hover
            item.querySelector('img').style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            // Reset the scale on mouse leave to remove the zoom effect
            item.querySelector('img').style.transform = 'scale(1)';
        });
    });
});

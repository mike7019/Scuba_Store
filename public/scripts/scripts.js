document.addEventListener('DOMContentLoaded', () => {
    // Handle tab switching logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabContents.forEach(content => content.style.display = 'none');
            document.getElementById(button.dataset.tab).style.display = 'block';
        });
    });

    const carousel = document.getElementById('carousel');
    const section = document.getElementById('tours');
    const carouselImg = document.getElementById('carousel-img');
    const closeCarousel = document.querySelector('.carousel .close');
    const prevCarousel = document.querySelector('.carousel .prev');
    const nextCarousel = document.querySelector('.carousel .next');
    const thumbnailsContainer = document.getElementById('thumbnails');
    const tabContentsArray = Array.from(document.querySelectorAll('.tab-content'));
    let currentCarouselIndex = 0;
    let currentGalleryImages = [];

    function showCarouselImage(index) {
        currentCarouselIndex = index;
        carouselImg.src = currentGalleryImages[currentCarouselIndex].src;
        carousel.style.display = 'flex';
        updateThumbnails();
    }

    function updateThumbnails() {
        thumbnailsContainer.innerHTML = '';
        currentGalleryImages.forEach((img, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = img.src;
            thumbnail.classList.add('thumbnail');
            if (index === currentCarouselIndex) {
                thumbnail.classList.add('active');
            }
            thumbnail.addEventListener('click', () => {
                showCarouselImage(index);
            });
            thumbnailsContainer.appendChild(thumbnail);
        });
    }

    tabContentsArray.forEach(tabContent => {
        const galleryImages = Array.from(tabContent.querySelectorAll('.gallery img'));
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentGalleryImages = galleryImages;
                showCarouselImage(index);
            });
        });
    });

    closeCarousel.addEventListener('click', () => {
        carousel.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling on the main page
    });

    carousel.addEventListener('click', (event) => {
        if (event.target === carousel) {
            carousel.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling on the main page
        }
    });

    prevCarousel.addEventListener('click', (event) => {
        event.stopPropagation();
        currentCarouselIndex = (currentCarouselIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        showCarouselImage(currentCarouselIndex);
    });

    nextCarousel.addEventListener('click', (event) => {
        event.stopPropagation();
        currentCarouselIndex = (currentCarouselIndex + 1) % currentGalleryImages.length;
        showCarouselImage(currentCarouselIndex);
    });

    const closeButton = document.querySelector(".close");

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            carousel.style.display = "none";
        });
    }


    if (closeCarousel) {
        closeCarousel.addEventListener('click', () => {
            carousel.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling on the main page
        });
    }

    // Ensure the carousel is hidden initially
    carousel.style.display = 'none';

    
});


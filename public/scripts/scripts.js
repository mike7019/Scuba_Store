document.addEventListener('DOMContentLoaded', () => {
    // Handle tab switching logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabContents.forEach(content => content.style.display = 'none');
            const targetTab = document.getElementById(button.dataset.tab);
            if (targetTab) {
                targetTab.style.display = 'block';
            }
        });
    });

    const carousel = document.getElementById('carousel');
    const carouselImg = document.getElementById('carousel-img');
    const closeCarousel = document.querySelector('.carousel .close');
    const prevCarousel = document.querySelector('.carousel .prev');
    const nextCarousel = document.querySelector('.carousel .next');
    const thumbnailsContainer = document.getElementById('thumbnails');
    let currentCarouselIndex = 0;
    let currentGalleryImages = [];

    function showCarouselImage(index) {
        if (currentGalleryImages[index]) {
            currentCarouselIndex = index;
            carouselImg.src = currentGalleryImages[currentCarouselIndex].src;
            carousel.style.display = 'flex';
            updateThumbnails();
        }
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

    const tabContentsArray = Array.from(document.querySelectorAll('.tab-content'));
    tabContentsArray.forEach(tabContent => {
        const galleryImages = Array.from(tabContent.querySelectorAll('.gallery img'));
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentGalleryImages = galleryImages;
                showCarouselImage(index);
            });
        });
    });

    if (closeCarousel) {
        closeCarousel.addEventListener('click', () => {
            carousel.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling on the main page
        });
    }

    if (carousel) {
        carousel.addEventListener('click', (event) => {
            if (event.target === carousel) {
                carousel.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling on the main page
            }
        });
    }

    if (prevCarousel) {
        prevCarousel.addEventListener('click', (event) => {
            event.stopPropagation();
            currentCarouselIndex = (currentCarouselIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
            showCarouselImage(currentCarouselIndex);
        });
    }

    if (nextCarousel) {
        nextCarousel.addEventListener('click', (event) => {
            event.stopPropagation();
            currentCarouselIndex = (currentCarouselIndex + 1) % currentGalleryImages.length;
            showCarouselImage(currentCarouselIndex);
        });
    }

    // Ensure the carousel is hidden initially
    if (carousel) {
        carousel.style.display = 'none';
    }
});


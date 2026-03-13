import './style.css';

console.log('Lost in Starlight - Main JS Loaded');

const galleryImages = [
    { src: './assets/lost-in-starlight-gallery/grid-1.jpg', alt: 'Scene 1', tall: false },
    { src: './assets/lost-in-starlight-gallery/f4fd954bf5fb23bdcaf5554e98a11f77.jpg', alt: 'Scene 12', tall: true },
    { src: './assets/lost-in-starlight-gallery/4165b007b8d1e9ece41cedfa93ea5deb.jpg', alt: 'Scene 7', tall: false },
    { src: './assets/lost-in-starlight-gallery/grid-2.jpg', alt: 'Scene 2', tall: true },
    { src: './assets/lost-in-starlight-gallery/6992f17fdfb0b392d333a6d821f20ce0.jpg', alt: 'Scene 10', tall: false },
    { src: './assets/lost-in-starlight-gallery/0bade3eee29e8b3e45b1b9c856e379b5.jpg', alt: 'Scene 6', tall: true },
    { src: './assets/lost-in-starlight-gallery/grid-3.jpg', alt: 'Scene 3', tall: false },
    { src: './assets/lost-in-starlight-gallery/5b0cb65fea90a3a73f3df6870211f3cf.jpg', alt: 'Scene 9', tall: true },
    { src: './assets/lost-in-starlight-gallery/de27c844376b98a21cf11b63adfea633.jpg', alt: 'Scene 11', tall: false },
    { src: './assets/lost-in-starlight-gallery/grid-4.jpg', alt: 'Scene 4', tall: true },
    { src: './assets/lost-in-starlight-gallery/4518d1d0cd47d27694ec554b844526f4.jpg', alt: 'Scene 8', tall: false },
    { src: './assets/lost-in-starlight-gallery/grid-5.jpg', alt: 'Scene 5', tall: false }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderGallery() {
    const grid = document.getElementById('masonry-grid');
    if (!grid) return;

    // Shuffle images
    const shuffledImages = shuffleArray([...galleryImages]);

    // Clear existing content (should be empty anyway, but good for HMR)
    grid.innerHTML = '';

    shuffledImages.forEach(imgData => {
        const item = document.createElement('div');
        item.className = `masonry-item ${imgData.tall ? 'tall' : ''}`;

        item.innerHTML = `
            <img src="${imgData.src}" alt="${imgData.alt}" loading="lazy">
            <div class="item-overlay">
                <button class="view-btn">VIEW</button>
            </div>
        `;

        grid.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    initLightbox();
});

function initLightbox() {
    // Create lightbox element if it doesn't exist
    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.id = 'lightbox';

        const img = document.createElement('img');
        lightbox.appendChild(img);

        document.body.appendChild(lightbox);

        // Close on click
        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    // Add click events to masonry items
    const items = document.querySelectorAll('.masonry-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const lightboxInit = document.getElementById('lightbox');
            if (lightboxInit) {
                const lightboxImg = lightboxInit.querySelector('img');
                lightboxImg.src = imgSrc;
                lightboxInit.classList.add('active');
            }
        });
    });
}



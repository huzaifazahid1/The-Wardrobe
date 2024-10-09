document.addEventListener('DOMContentLoaded', () => {
    // Image Carousel
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalImages = carousel.children.length;
    let currentIndex = 0;
    let isAnimating = false;

    const updateCarousel = () => {
        if (isAnimating) return;
        isAnimating = true;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            isAnimating = false;
        }, 500); // Duration should match the CSS transition
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    // Tabs
    const detailsTab = document.getElementById('detailsTab');
    const reviewsTab = document.getElementById('reviewsTab');
    const detailsContent = document.getElementById('detailsContent');
    const reviewsContent = document.getElementById('reviewsContent');

    detailsTab.addEventListener('click', () => {
        // Activate Details Tab
        detailsTab.classList.add('border-b-2', 'border-blue-500', 'text-blue-500');
        detailsTab.classList.remove('text-gray-600', 'hover:text-gray-800');
        reviewsTab.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500');
        reviewsTab.classList.add('text-gray-600', 'hover:text-gray-800');

        // Show Details Content
        detailsContent.classList.remove('hidden');
        reviewsContent.classList.add('hidden');
    });

    reviewsTab.addEventListener('click', () => {
        // Activate Reviews Tab
        reviewsTab.classList.add('border-b-2', 'border-blue-500', 'text-blue-500');
        reviewsTab.classList.remove('text-gray-600', 'hover:text-gray-800');
        detailsTab.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500');
        detailsTab.classList.add('text-gray-600', 'hover:text-gray-800');

        // Show Reviews Content
        reviewsContent.classList.remove('hidden');
        detailsContent.classList.add('hidden');
    });
});
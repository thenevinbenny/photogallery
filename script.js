// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 2,
        touchRatio: 1.5,
        resistance: true,
        resistanceRatio: 0.85,
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true
        }
    });

    // Tab switching functionality
    const tabs = document.querySelectorAll('[data-tab]');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active-tab'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active-tab');
            const content = document.getElementById(`${tab.dataset.tab}-section`);
            content.classList.add('active');

            // Update Swiper if we're switching to posts tab
            if (tab.dataset.tab === 'posts') {
                swiper.update();
            }
        });
    });
});

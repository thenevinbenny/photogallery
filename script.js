// Sample posts data (you can replace these with your actual content)
const posts = [
    {
        id: 1,
        imageUrl: 'images/underwater.jpg',
        likes: 245,
        comments: 12
    },
    {
        id: 2,
        imageUrl: 'images/foggy-mountain.jpg',
        likes: 189,
        comments: 8
    },
    {
        id: 3,
        imageUrl: 'images/reflection.jpg',
        likes: 320,
        comments: 15
    }
];

// Function to create post elements
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'grid-item bg-gray-100';
    
    postDiv.innerHTML = `
        <img src="${post.imageUrl}" alt="Post ${post.id}" class="w-full h-full object-cover">
        <div class="overlay">
            <div class="text-white flex gap-6">
                <span><i class="fas fa-heart"></i> ${post.likes}</span>
                <span><i class="fas fa-comment"></i> ${post.comments}</span>
            </div>
        </div>
    `;
    
    return postDiv;
}

// Function to initialize the gallery
function initializeGallery() {
    const gallery = document.querySelector('.grid');
    if (gallery) {
        posts.forEach(post => {
            gallery.appendChild(createPostElement(post));
        });
    }
}

// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 2,
        touchRatio: 1.5, // Increase touch sensitivity
        resistance: true, // Add resistance effect at the edges
        resistanceRatio: 0.85,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        // Responsive breakpoints
        breakpoints: {
            // Mobile
            320: {
                coverflowEffect: {
                    rotate: 20,
                    depth: 50,
                }
            },
            // Tablet
            768: {
                coverflowEffect: {
                    rotate: 25,
                    depth: 75,
                }
            },
            // Desktop
            1024: {
                coverflowEffect: {
                    rotate: 30,
                    depth: 100,
                }
            }
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

    initializeGallery();
});

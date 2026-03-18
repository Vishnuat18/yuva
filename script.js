/**
 * script.js - Handles dynamic rendering and navigation for YUVA Culturals website.
 */

function initHomePage() {
    const grid = document.getElementById('events-grid');
    if (!grid) return;

    // Initialize Monuments Slideshow
    initSlideshow();

    // Hamburger Menu Logic
    const menuIcon = document.querySelector('.menu-icon');
    const overlay = document.getElementById('menu-overlay');
    const closeBtn = document.getElementById('close-menu');

    if (menuIcon && overlay && closeBtn) {
        menuIcon.addEventListener('click', () => overlay.classList.add('active'));
        closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
    }

    // Clear existing content
    grid.innerHTML = '';

    const eventsArray = Object.entries(eventData).filter(([id, data]) => !data.isChampion);
    const championsEntry = Object.entries(eventData).find(([id, data]) => data.isChampion);

    // Loop through standard events
    eventsArray.forEach(([id, data], index) => {
        const item = document.createElement('div');
        const isMobile = window.innerWidth <= 768;
        const isEven = index % 2 === 0;
        
        // Staggered layout classes only for mobile
        const staggeredClass = isMobile ? (isEven ? 'slide-right' : 'slide-left') : '';
        item.className = `event-list-item ${staggeredClass}`;
        
        item.innerHTML = `
            <div class="event-image-container">
                <img src="${data.image}" alt="${data.title}" class="event-img-small">
            </div>
            <div class="event-text-content">
                <h3 class="event-item-title">${data.title}</h3>
                <span class="event-arrow-web">→</span>
                <span class="event-arrow-mobile">${isEven ? '→' : '←'}</span>
            </div>
        `;

        grid.appendChild(item);
    });

    // Event Delegation for Clicks and Swipes
    grid.addEventListener('click', (e) => {
        const item = e.target.closest('.event-list-item');
        if (!item) return;

        const eventId = Object.keys(eventData).find(id => {
            const data = eventData[id];
            return item.querySelector('.event-item-title').textContent === data.title;
        });

        if (eventId) {
            if (window.innerWidth <= 768) {
                const index = Array.from(grid.children).indexOf(item);
                const isEven = index % 2 === 0;
                const animationClass = isEven ? 'exit-right' : 'exit-left';
                item.classList.add(animationClass);
                setTimeout(() => {
                    window.location.href = `rules.html?event=${eventId}`;
                }, 300);
            } else {
                window.location.href = `rules.html?event=${eventId}`;
            }
        }
    });

    // Use a shared touch tracker for better performance
    let touchStartX = 0;
    let touchEndX = 0;

    grid.addEventListener('touchstart', (e) => {
        const item = e.target.closest('.event-list-item');
        if (item) touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    grid.addEventListener('touchend', (e) => {
        const item = e.target.closest('.event-list-item');
        if (!item) return;

        touchEndX = e.changedTouches[0].screenX;
        const swipedPath = touchEndX - touchStartX;
        const threshold = 50;

        if (Math.abs(swipedPath) > threshold) {
            const eventId = Object.keys(eventData).find(id => {
                const data = eventData[id];
                return item.querySelector('.event-item-title').textContent === data.title;
            });

            if (eventId) {
                const direction = swipedPath > 0 ? 'exit-right' : 'exit-left';
                item.classList.add(direction);
                setTimeout(() => {
                    window.location.href = `rules.html?event=${eventId}`;
                }, 300);
            }
        }
    }, { passive: true });

    // Render Champions Card
    if (championsEntry) {
        const [id, data] = championsEntry;
        const champItem = document.createElement('div');
        champItem.className = 'event-list-item-champions';
        champItem.innerHTML = `
            <div class="champions-image-box">
                <img src="${data.image}" alt="${data.title}" class="event-img-small">
            </div>
            <div class="champions-footer">
                <h3 class="champions-title">Champions</h3>
                <div class="event-arrow">→</div>
            </div>
        `;
        champItem.addEventListener('click', () => {
            window.location.href = `rules.html?event=${id}`;
        });
        grid.appendChild(champItem);
    }
}

function initSlideshow() {
    const slideshowInner = document.getElementById('slideshow-inner');
    const categoryEl = document.getElementById('slide-category');
    if (!slideshowInner) return;

    // Use shared monumentImages from data.js
    const images = monumentImages;

    // Clear loading state
    slideshowInner.innerHTML = '';

    images.forEach((img, index) => {
        const imgEl = document.createElement('img');
        imgEl.src = `assests/monuments/${img.name}`;
        imgEl.alt = img.category;
        imgEl.className = `slide ${index === 0 ? 'active' : ''}`;
        imgEl.loading = 'lazy';
        slideshowInner.appendChild(imgEl);
    });

    let currentIndex = 0;
    const slides = slideshowInner.querySelectorAll('.slide');

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
        
        if (categoryEl) {
            categoryEl.textContent = images[currentIndex].category;
        }
    }, 3000);
}

function initRulesPage() {
    const content = document.getElementById('rules-content');
    if (!content) return;

    // Get event ID from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');

    if (!eventId || !eventData[eventId]) {
        // Invalid or missing event ID
        content.innerHTML = `
            <div class="error-message">
                <h2>Event not found!</h2>
                <p>The event you are looking for does not exist or the link is invalid.</p>
                <br>
                <a href="index.html" class="btn-back">Go Home</a>
            </div>
        `;
        return;
    }

    const data = eventData[eventId];

    // Build the rules list
    const rulesHTML = data.rules.map(rule => `<li>${rule}</li>`).join('');

    // Determine prize display (Web uses text, Mobile uses image if available)
    const isMobile = window.innerWidth <= 768;
    let prizeContent = '';

    if (isMobile && data.prizeImage) {
        prizeContent = `<img src="${data.prizeImage}" alt="Prizes" class="prize-image-bill">`;
    } else {
        prizeContent = `
            <div class="prizes-grid">
                <div class="prize-card first">
                    <div class="prize-rank">1st Place</div>
                    <div class="prize-amount">${data.prizes.first.replace('Overall Champions: ', '').replace('First Runner Up: ', '').replace('Second Runner Up: ', '')}</div>
                </div>
                <div class="prize-card second">
                    <div class="prize-rank">2nd Place</div>
                    <div class="prize-amount">${data.prizes.second.replace('Overall Champions: ', '').replace('First Runner Up: ', '').replace('Second Runner Up: ', '')}</div>
                </div>
                ${data.prizes.third ? `
                <div class="prize-card third">
                    <div class="prize-rank">3rd Place</div>
                    <div class="prize-amount">${data.prizes.third.replace('Overall Champions: ', '').replace('First Runner Up: ', '').replace('Second Runner Up: ', '')}</div>
                </div>` : ''}
            </div>`;
    }

    // Apply header gradient if specified
    content.style.setProperty('--primary-color', data.color || '#ff007a');

    // Populate the content structure
    content.innerHTML = `
        <div class="rules-header">
            <div class="rules-icon">
                <img src="${data.image}" alt="${data.title}" class="rules-header-img">
            </div>
            <div>
                <h1 class="rules-title" style="--header-gradient: ${data.gradient}">${data.title}</h1>
            </div>
        </div>

        <div class="rules-body">
            <div class="rules-section">
                <h2 class="section-title">Rules & Regulations</h2>
                <ul class="rules-list">
                    ${rulesHTML}
                </ul>
            </div>

            <div class="rules-section prizes-section">
                <h2 class="section-title">Prizes</h2>
                <div class="prize-image-container">
                    ${prizeContent}
                </div>
            </div>
        </div>
    `;
}

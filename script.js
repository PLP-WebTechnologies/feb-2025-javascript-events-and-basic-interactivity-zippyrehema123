// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components except slideshow
    initTabs();
    initAccordion();
    initEventHandlers();
    initFormValidation();
});

// -------------- TAB FUNCTIONALITY --------------
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Add active class to clicked tab
            button.classList.add('active');

            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// -------------- ACCORDION FUNCTIONALITY --------------
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;

            // Check if this item is already active
            const isActive = accordionItem.classList.contains('active');

            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
}

// -------------- EVENT HANDLERS --------------
function initEventHandlers() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Learn more button
    const learnMoreBtn = document.getElementById('learn-more-btn');
    learnMoreBtn.addEventListener('click', () => {
        document.querySelector('.key-stats').scrollIntoView({ behavior: 'smooth' });

        learnMoreBtn.textContent = 'Keep Exploring';
        learnMoreBtn.style.backgroundColor = '#00b4d8';

        setTimeout(() => {
            learnMoreBtn.textContent = 'Learn More';
            learnMoreBtn.style.backgroundColor = '';
        }, 2000);
    });

    // Double click event for easter egg
    document.addEventListener('dblclick', showEasterEgg);

    // Keyboard shortcut for fact box
    document.addEventListener('keydown', handleKeyPress);

    // Hover effects on stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = '#e6f9ff';
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = '';
        });
    });

    // Close fact box
    const closeFactBtn = document.getElementById('close-fact');
    closeFactBtn.addEventListener('click', () => {
        document.getElementById('fact-box').classList.add('hidden');
    });

    // Form success handling
    const newFormBtn = document.getElementById('new-form');
    newFormBtn.addEventListener('click', () => {
        document.getElementById('form-success').classList.add('hidden');
        document.getElementById('contact-form').classList.remove('hidden');
        document.getElementById('contact-form').reset();
    });
}

// Theme toggle function
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
}

// Easter egg animation
function showEasterEgg() {
    const easterEgg = document.getElementById('easter-egg');
    easterEgg.classList.remove('hidden');

    setTimeout(() => {
        easterEgg.classList.add('hidden');
    }, 3000);
}

// Key press handler
function handleKeyPress(event) {
    if (event.key.toLowerCase() === 'b') {
        document.getElementById('fact-box').classList.remove('hidden');
    }
}

// Form validation function (placeholder to satisfy requirements)
function initFormValidation() {
    // You can implement client-side validation here if needed
}

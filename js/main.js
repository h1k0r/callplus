// Main JavaScript file for CallPlus Dialer website

document.addEventListener('DOMContentLoaded', function() {
    // Theme management
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize theme with smooth transition
    document.body.style.transition = 'background-color 0.3s ease';
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }

    // Theme toggle functionality with smooth transition
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Add transition class before changing theme
        document.documentElement.classList.add('theme-transition');

        // Set timeout to remove transition class
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 300);

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-sun', 'fa-moon');
        icon.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
    }

    // Enhanced animation for feature cards
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.feature-card, .solution-card, .job-card');
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('visible');
                card.classList.add('animate-fade-up');
            }
        });
    };

    // Initial check for visible elements
    animateOnScroll();

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);

    // Form validation and submission with animation
    const forms = document.querySelectorAll('#contactForm, #demoForm');
    forms.forEach(form => {
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                // Basic form validation
                const formInputs = form.querySelectorAll('input, textarea, select');
                let isValid = true;

                formInputs.forEach(input => {
                    if (input.required && !input.value.trim()) {
                        isValid = false;
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                    }

                    // Email validation
                    if (input.type === 'email') {
                        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailPattern.test(input.value)) {
                            isValid = false;
                            input.classList.add('is-invalid');
                        }
                    }
                });

                if (isValid) {
                    // Show success message with animation
                    const successMessage = document.createElement('div');
                    successMessage.className = 'alert alert-success mt-3 animate-fade-up';
                    successMessage.role = 'alert';
                    successMessage.textContent = 'Thank you for your message. We will get back to you soon!';

                    form.appendChild(successMessage);
                    form.reset();

                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.add('animate-fade-up');
                        setTimeout(() => {
                            successMessage.remove();
                        }, 300);
                    }, 5000);
                }
            });

            // Remove invalid class on input focus
            form.querySelectorAll('input, textarea, select').forEach(input => {
                input.addEventListener('focus', function() {
                    this.classList.remove('is-invalid');
                });
            });
        }
    });

    // Enhanced navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow', 'animate-slide-in');
            } else {
                navbar.classList.remove('shadow', 'animate-slide-in');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
});
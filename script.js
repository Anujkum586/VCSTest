document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const currentYearSpan = document.getElementById('currentYear');

    // Dark Mode Toggle
    if (darkModeToggle) {
        // Check local storage for theme preference
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun text-xl text-yellow-300"></i>';
        } else {
            document.documentElement.classList.remove('dark');
            darkModeToggle.innerHTML = '<i class="fas fa-moon text-xl text-gray-700"></i>';
        }

        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.innerHTML = '<i class="fas fa-sun text-xl text-yellow-300"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.innerHTML = '<i class="fas fa-moon text-xl text-gray-700"></i>';
            }
        });
    }

    // Mobile Menu Toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Toggle icon
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            } else {
                mobileMenuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
            }
        });

        // Close mobile menu when a link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            });
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update Copyright Year
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
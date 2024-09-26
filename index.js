document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all sections
    const links = document.querySelectorAll('a[href^="#"]'); // Select all anchor links that start with #
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetElement = document.querySelector(targetId); // Select the target section

            if (targetElement) {
                const windowHeight = window.innerHeight;
                const sectionHeight = targetElement.offsetHeight;
                const sectionTop = targetElement.offsetTop;
                const scrollTo = sectionTop - (windowHeight / 2) + (sectionHeight / 2);

                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }

            // Close mobile nav after clicking a link
            const mobileNav = document.querySelector('.mobile-nav');
            if (mobileNav.classList.contains('is-active')) {
                mobileNav.classList.remove('is-active');
            }
        });
    });

    // Hamburger menu functionality
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    menuIcon.addEventListener('click', function() {
        mobileNav.classList.toggle('is-active'); // Toggle mobile navigation
    });
});
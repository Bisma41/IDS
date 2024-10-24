// Script to add interactivity in the future
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully");

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Button click event for CTA (Call to Action)
    const ctaButton = document.querySelector('.cta-btn');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert("Thank you for clicking the CTA button!");
        });
    }
});

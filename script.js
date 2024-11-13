// Smooth scroll to sections when clicking anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CTA button pulse animation effect
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.classList.add('pulse');
});
ctaButton.addEventListener('mouseout', () => {
    ctaButton.classList.remove('pulse');
});

// Optional: Animation for elements on scroll (for benefit and testimonial sections)
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.benefit, .testimonial');
    const triggerPoint = window.innerHeight * 0.8; // Trigger point for when animations start

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('fade-in');
        }
    });
});
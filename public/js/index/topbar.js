window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    header.classList.toggle('scrolled', window.scrollY > 0);
    backToTop.classList.toggle('visible', window.scrollY > 300);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.content-block').forEach(block => {
    observer.observe(block);
});
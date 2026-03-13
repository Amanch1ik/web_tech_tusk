// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.navbar-burger');
    var navLinks = document.querySelector('.navbar-links');

    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        // закрываем меню при клике на ссылку
        var links = navLinks.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                burger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        }
    }

    // Кнопка "Наверх"
    var scrollBtn = document.getElementById('scrollTop');
    if (scrollBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Анимация появления при скролле
    var cards = document.querySelectorAll('.card, .feature-card, .task-link');
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(function(el) {
        el.classList.add('scroll-hidden');
        observer.observe(el);
    });
});

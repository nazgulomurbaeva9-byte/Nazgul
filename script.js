// Эффект появления при скролле
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

// Эффект нажатия на кнопку (всплеск)
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.innerText = 'Добавлено!';
        this.style.background = '#27ae60';
        this.style.color = 'white';
        setTimeout(() => {
            this.innerText = 'В корзину';
            this.style.background = 'rgba(255, 255, 255, 0.2)';
            this.style.color = '#fff';
        }, 2000);
    });
});

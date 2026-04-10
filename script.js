// 1. Эффект плавного появления элементов при скролле
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Применяем анимацию к карточкам товаров
document.querySelectorAll('.product-card').forEach(card => {
    card.classList.add('hidden'); // Изначально скрываем
    observer.observe(card);
});

// 2. Логика поиска (простая имитация)
const searchInput = document.querySelector('.search-container input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if(query) {
        alert('Searching for: ' + query + '... (This is a demo)');
    } else {
        alert('Please enter something to search!');
    }
});

// 3. Анимация кнопки "Add to Cart"
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerText;
        this.innerText = 'ADDED! ❤️';
        this.style.background = '#ff4d8d';
        this.style.color = '#fff';
        this.style.borderColor = '#ff4d8d';
        
        setTimeout(() => {
            this.innerText = originalText;
            this.style.background = '#fff';
            this.style.color = '#000';
            this.style.borderColor = '#000';
        }, 2000);
    });
});

// 4. Эффект параллакса для баннера (слегка двигается за мышкой)
const banner = document.querySelector('.main-banner');
banner.addEventListener('mousemove', (e) => {
    const moveX = (e.pageX * -1 / 50);
    const moveY = (e.pageY * -1 / 50);
    document.querySelector('.banner-image img').style.transform = `translate(${moveX}px, ${moveY}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const link = this.getAttribute("data-link");
            window.open(link, "_blank");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const link = this.getAttribute("data-link");

            // Вспышка цвета при клике
            this.style.backgroundColor = "#1e7e34";
            setTimeout(() => {
                this.style.backgroundColor = "#28a745";
            }, 200);

            // Открываем ссылку
            window.open(link, "_blank");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buy-btn");
    const sneakerCards = document.querySelectorAll(".sneaker-card");

    // Анимация появления карточек при прокрутке
    function revealOnScroll() {
        sneakerCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 50) {
                card.classList.add("show");
            }
        });
    }

    // Проверяем при прокрутке
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Чтобы проверить при загрузке

    // Добавляем анимацию кнопок
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const link = this.getAttribute("data-link");

            // Вспышка цвета при клике
            this.style.backgroundColor = "#1e7e34";
            setTimeout(() => {
                this.style.backgroundColor = "#28a745";
            }, 200);

            // Открываем ссылку
            window.open(link, "_blank");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sneakerCards = document.querySelectorAll(".sneaker-card");

    function checkVisibility() {
        sneakerCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;

            if (inView) {
                card.classList.add("show");
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
                card.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Проверяем при загрузке
});

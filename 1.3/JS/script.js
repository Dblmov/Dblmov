if (window.innerWidth <= 768) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        slidesPerColumn: 1,
        slidesPerColumnFill:"row",
        spaceBetween: 16,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true, 
        },
    });
};


document.querySelector('.brand__show-all').addEventListener('click', function () {
    var wrapper = document.querySelector('.swiper-wrapper');
    var btn = document.querySelector('.brand__show-all');

    if (wrapper.classList.contains('show')) {
        btn.textContent = 'Показать всё';
        btn.classList.remove('show');
        wrapper.classList.remove('show');
    } else {
        btn.textContent = 'Скрыть';
        btn.classList.add('show');
        wrapper.classList.add('show');
    };
})
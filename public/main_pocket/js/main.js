/* скрыть поле поиска при scroll */
/*
$(window).scroll(function() {
    $('#search').hide();
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('#search').show();
    }, 250));
});
*/

/*Спрятать кнопку поиска при scroll*/
$(window).scroll(function() {
    
    $("#search").css("display", "none").fadeIn("fast");

});

$(document).ready(function() {

    /*спрятать кнопку #top */ 
    let btnTop = $('#top');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(btnTop).css("opacity", 1);
        
        } else {
            $(btnTop).css("opacity", 0);
        }
    });
    btnTop.click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });

    /*Развернуть форму поиска*/ 
    $('#button').on('click', function(e) {
        e.preventDefault();        
        let form = $(this).parent();
        let inputSearch = form.find('#input');
        inputSearch.toggleClass('hide').focus();

        if (inputSearch.val()) {
            form.submit();
        }

    });
    
    /* счётчик достижений */
    let counterBox = $('.achievements');
    if (counterBox.length) {
        let counterItem = $('.counter-num');
        let showCounter = true;

        $(window).on('scroll load resize', function () {
            let counterBoxTop = counterBox.offset().top;
            let windowHeight = window.innerHeight;
            let windowTop = $(window).scrollTop();

            if (showCounter && (counterBoxTop + 2 < windowTop + windowHeight)) {
                showCounter = false;
                counterItem.css('opacity', 1);
                counterItem.spincrement({
                    duration: 500,
                    fade: true
                });
            }
        });
    };

    /* =========Slider Promo========== */

    //$("#slider-promo, #slider-popular").owlCarousel({
    $("#slider-promo").owlCarousel({
        autoplay: true,
        loop: true,
        slideTransition: 'linear', // эффект бегущей строки (autoplayTimeout===autoplaySpeed)
        autoplayTimeout: 3000,    // пауза между переходами
        autoplaySpeed: 3000,     // скорость анимации
        smartSpeed: 1000,       // скорость при свайпе
        navSpeed: 1000,        // скорость при использовании стрелок
        dots: false,
		lazyLoad: true,
        mouseDrag: true,
        touchDrag: true,
        autoplayHoverPause: true,
        margin: 8,
        nav: false,
        responsive:{
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            },
        }
    });

    /* =============Slider Promo================ */
    /* ===========кнопки управления============= */

    $('.prev-btn').click(function() {
        $('.owl-carousel').trigger('prev.owl.carousel');
    
    });
    $('.next-btn').click(function() {
        $('.owl-carousel').trigger('next.owl.carousel');
    
    });
    
    /* ==========Slider Popular========== */

    $("#slider-popular").owlCarousel({
        autoplay: true,
        loop: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        smartSpeed: 1000,
        navSpeed: 1000,
        lazyLoad: true,
        mouseDrag: true,
        touchDrag: true,
        autoplayHoverPause: true,
        margin: 8,
        nav: false,
        responsive:{
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            },
        }
    });
    
    /* ===========Slider Popular=========== */

    /* ===========Call Back================ */

    $("#phone").mask("+7(999)999-9999");

    /* ===========Call Back================ */

    /* видео owl carousel *//*
    
    $('#video.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        video: true,
        lazyLoad: true
    }); 
    */

    /* ================гравюры ukiyo_e================ */

    /*
    // 1. Получаем элемент, который будем наблюдать
    const element = $('.filters'); // Используем jQuery для получения элемента

    // 2. Создаем экземппляр ResizeObserver
    const resizeObserver = new ResizeObserver(entries => {
        // Цикл по всем наблюдаемым элементам (обычно один)
        for (let entry of entries) {
            // Получаем новые размеры
            const { width, height } = entry.contentRect;
            //console.log(`Элемент изменил размер: ${width}px x ${height}px`);

            // Здесь можно добавить свой код для обработки изменения размера
            var $parent_sidebar  = $('.sidebar');           // родительский блок
            var $child_filters   = $('.filters');           // дочерний блок
            var $child_ukiyo_e   = $('.ukiyo_e');

            var sidebarHeight = 1000;                       // пороговая высота (в пикселях)
            var filtersHeight = 210;

            // Проверяем высоту родителя при загрузке страницы
            if ( $parent_sidebar.height() < sidebarHeight ) {
                $child_ukiyo_e.hide();                       // Скрываем дочерний блок
            } else {
                $child_ukiyo_e.show();
            }

            // Скрываем гравюры если фильтр раскрывается 
            if ( $child_filters.height() > filtersHeight ) {
                $child_ukiyo_e.hide();
            } else {
                $child_ukiyo_e.show();
            }
        }
    });


    // 3. Начинаем наблюдать за элементом
    resizeObserver.observe(element[0]); // Передаем нативный DOM-элемент (element[0])
    */

    /*
    ResizeObserver: Это стандартный веб API, работающий независимо от jQuery, но легко интегрируемый с ней.

    observe(element[0]): Метод observe принимает нативный DOM-элемент, поэтому
        при использовании jQuery нужно передать element[0].

    contentRect: Объект, содержащий width (ширину) и height (высота) элемента без учета отступов (padding).
    */

});

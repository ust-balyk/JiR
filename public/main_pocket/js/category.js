$(document).ready(function() {

    /****** выбор ценового диапазона *******/
    const sliderRange = $('#slider-range');

    if( sliderRange ) {
        let minPriceInput = $('#min_price');
        let maxPriceInput = $('#max_price');

        $( "#slider-range" ).slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [ minPrice, maxPrice ],
            slide: function( event, ui ) {
                minPriceInput.val(ui.values[0]);
                maxPriceInput.val(ui.values[1]);
            }
        });
    }


    /******* скрыть гравюры и показать кнопку *******/

    // глобальная переменная для хранения высоты блока фильтров
    window.filters_block_height = 1;
    // получение и сохранение высоты
    function update_block_height() {
        // .height() - без padding/border, .outerHeight(true) - с margin/padding/border
        window.filters_block_height = $('.filters').height();
        //console.log("Высота блока: " + window.filters_block_height + "px");
        // можно использовать filters_block_height, например, для установки другой высоты
        // $('#anotherBlock').height(filters_block_height);
    }
    // вызываем при загрузке страницы
    $(function() {
        update_block_height(); // инициализация
    
    });

    const element        = $('.filters');
    const btn_filters    = document.getElementById('btn_activate_filters');
    const selector_link  = btn_filters.querySelector('#selector_link');
    const selector_text  = btn_filters.querySelector('#selector_text');          
    const block_filters  = $('.filters');           
    const block_ukiyo_e  = $('.ukiyo_e');

    const activate_filter = new ResizeObserver(entries => {
        for ( let entry of entries ) {
            const { width, height } = entry.contentRect;
            if ( block_filters.height() > filters_block_height ) {
                block_ukiyo_e.hide();
                selector_link.setAttribute('href', 'http://localhost:8888');
                selector_link.setAttribute('class', 'btn btn-outline-primary activate_filters');
                selector_text.setAttribute('class', 'activate_filters');
                selector_text.textContent = 'применить фильтры';

            } else {
                block_ukiyo_e.show();
                selector_link.setAttribute('class', '');
                selector_text.setAttribute('class', '');
                selector_text.textContent = 'Фильтры';
            
            }
        }
    });
    activate_filter.observe(element[0]);

    /*
    ResizeObserver: Это стандартный веб API, работающий независимо от jQuery, но легко интегрируемый с ней.

    observe(element[0]): Метод observe принимает нативный DOM-элемент, поэтому
                                                        при использовании jQuery нужно передать element[0].

    contentRect: Объект, содержащий width (ширину) и height (высота) элемента без учета отступов (padding).
    */


    /* скрыть гравюры *//*
    const sidebar = $('.sidebar');
    const ukiyo_e  = $('.ukiyo_e');
    const sidebar_height  = 1450;

    const hide_ukiyo_e = new ResizeObserver(entries => {
        for ( let entry of entries ) {
            const { width, height } = entry.contentRect;
            if ( sidebar.height() < sidebar_height ) {
                ukiyo_e.hide();

            } else {
                ukiyo_e.show();

            }
        }
    });
    hide_ukiyo_e.observe(element[0]);
    */


});

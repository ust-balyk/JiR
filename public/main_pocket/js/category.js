$(function() {

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


    /******* скрыть гравюры *******/
    const element        = $('.filters');

    const btn_filters    = document.getElementById('btn_filters');
    const selector_link  = btn_filters.querySelector('#selector_link');
    const selector_text  = btn_filters.querySelector('#selector_text');

    const parent_sidebar = $('.sidebar');          
    const child_filters  = $('.filters');           
    const child_ukiyo_e  = $('.ukiyo_e');

    const sidebar_height  = 1000;
    const filters_height  = 225;
    
    const resizeObserver = new ResizeObserver(entries => {
        for ( let entry of entries ) {
            const { width, height } = entry.contentRect;
            if ( parent_sidebar.height() < sidebar_height ) {
                child_ukiyo_e.hide();

            } else if ( child_filters.height() > filters_height ) {
                child_ukiyo_e.hide();
                selector_link.setAttribute('href', 'http://localhost:8888');
                selector_link.setAttribute('class', 'btn btn-outline-primary active');
                selector_text.setAttribute('class', 'active');
                selector_text.textContent = 'применить фильтры';

            } else {
                child_ukiyo_e.show();
                selector_link.setAttribute('class', '');
                selector_text.setAttribute('class', '');
                selector_text.textContent = 'Фильтры';
            
            }
        }
    });
    resizeObserver.observe(element[0]);

    /*
    ResizeObserver: Это стандартный веб API, работающий независимо от jQuery, но легко интегрируемый с ней.

    observe(element[0]): Метод observe принимает нативный DOM-элемент, поэтому
                                                        при использовании jQuery нужно передать element[0].

    contentRect: Объект, содержащий width (ширину) и height (высота) элемента без учета отступов (padding).
    */


});

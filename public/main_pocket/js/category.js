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

    const parent_sidebar = $('.sidebar');          
    const child_filters  = $('.filters');           
    const child_ukiyo_e  = $('.ukiyo_e');

    const sidebarHeight  = 1000;
    const filtersHeight  = 358;

    const resizeObserver = new ResizeObserver(entries => {
        for ( let entry of entries ) {
            const { width, height } = entry.contentRect;
            if ( parent_sidebar.height() < sidebarHeight ) {
                child_ukiyo_e.hide();
            } else {
                child_ukiyo_e.show();
            }
            if ( child_filters.height() > filtersHeight ) {
                child_ukiyo_e.hide();
            } else {
                child_ukiyo_e.show();
            }
        }
    });
    resizeObserver.observe(element[0]);

});

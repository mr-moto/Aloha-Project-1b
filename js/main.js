$(function() {

    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top - 116
        }, 900)
    });

    // flickity slider
    $('.prod-list').flickity({
        cellAlign: 'left',
        contain: true,
        percentPosition: false,
        imagesLoaded: true,
        autoPlay: true,
        prevNextButtons: false,
        resize: true,
        wrapAround: true,
    });

    // validate email function
    $('form').on('click', 'button', function(event) {
        event.preventDefault();
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            val = $('.email-input').val();
        if (email.test(val)) {
            alert('Success)');
        } else {
            alert('ERROR: invalid email');
        }
    });

    // add to cart function
    var cartNumber = 0;
    $('.prod-list').on('click', 'button', function(event) {
        var $cartAdd = $('#add-cart-text');
        event.preventDefault();
        cartNumber++;
        $cartAdd.text(cartNumber);
        $('.cart-counter').show();
    });

})
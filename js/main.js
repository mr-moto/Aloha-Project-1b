$(function () {

    // smooth scrolling
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = this.hash, 
        // takes # of 'a href'
            $target = $(target); 
            // targets # of 'a href'

        $('html, body').animate({ 
            // animate method on the body
            'scrollTop': $target.offset().top - 116 
            // scrolltop animate method smooth scroll to corresponding 'a href' #
        }, 900) 
        // .top 116 for fixed nav bar. 900 for scroll speed in millisec
    });


    // flickity slider plugin
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
    $('form').on('click', 'button', function (event) {
        event.preventDefault();
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
        // email filter
            val = $('.email-input').val();
        if (email.test(val)) {
            alert('coolcats)');
        }
        else {
            alert('YOU DUN GOOFED');
        }
    });


    // add to cart function
    var cartNumber = 0; 
    // global variable
    $('.prod-list').on('click', 'button', function (event) {
        var $cartAdd = $('#add-cart-text');
        event.preventDefault();
        cartNumber++; 
        // ++ is cartnumber = cartnumber + 1
        $cartAdd.text(cartNumber);
        $('.cart-counter').show(); 
        // .show makes it appear

    });

})  

$(function() { 


    // flickity slider plugin
    $('.prod-list').flickity({
		cellAlign: 'left',
		contain: true,
		percentPosition: false,
		imagesLoaded: true,
		autoPlay: true,
		prevNextButtons: false,
        wrapAround: true,
        resize: true,
	});


    // validate email function
    $('form').on('click','button', function(event){
        event.preventDefault();
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var val = $('.email-input').val();
            if(email.test(val)){
            alert('coolcats)');
            }
            else{
            alert('YOU DUN GOOFED');
            }
    });



})  

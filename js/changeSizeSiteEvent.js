$(window).on('resize', function () {
    var win = $(this); //this = window
    if (win.height() <= 700) {
        $('.find').removeClass("d-flex").hide();
        $('button[type="findButton"]').show();
        $('a[type="cartInForm"]').hide();
        $('a[type="findCart"]').show();
//$('.wid').width('50%');
    }
    if (win.width() >= 700) {
        $('button[type="findButton"]').hide();
        $('a[type="findCart"]').hide();
        $('a[type="cartInForm"]').show();
        $('.find').addClass("d-flex").show();
        
//$('.wid').width('25%');

    }
});

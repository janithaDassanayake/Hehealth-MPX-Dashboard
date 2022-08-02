$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


if (window.navigator.userAgent.indexOf("Mobile") > -1) {
    // HIDING ELEMENTS
    $(".scroll").hide();
}    



setTimeout(function() {
    $('.section').addClass('remove');
},10000)
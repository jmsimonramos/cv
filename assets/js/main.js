jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});

function cambiarIdiomaING(){
    window.location.replace("https://jmsimonramos.github.io/cv-ing/")
}
function cambiarIdiomaESP(){
    window.location.replace("https://jmsimonramos.github.io/cv/");
}
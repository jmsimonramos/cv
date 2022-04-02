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
    window.location.replace("cv-ing.html")
}
function cambiarIdiomaESP(){
    window.location.replace("index.html");
}
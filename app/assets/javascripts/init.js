(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');

    $('.tabs-wrapper .row').pushpin({ top: $('.tabs-wrapper').offset().top }); 

  }); // end of document ready


})(jQuery); // end of jQuery name space

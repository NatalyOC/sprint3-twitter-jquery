$(document).ready(function(){
  /*Version 0.0.2 */
  var max_chars = 140;
  $('#counter').html(max_chars);
  $('#tweet-box').keyup(function() {
    var chars = $(this).val().length;
    var diff = max_chars - chars;
    $('#counter').html(diff);   
    //Habilitar boton
    $('#tweet-button').prop( 'disabled', false );
    /* $(this).height($(this).prop('scrollHeight')); */
    while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
      $(this).height($(this).height()+1);
  };
  });
  
    

  
});
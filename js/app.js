$(document).ready(function() {
  /* Version 0.0.2 */
  var maxChars = 140;
  $('#counter').html(maxChars);
  $('#tweet-box').keyup(function() {
    var chars = $(this).val().length;
    var diff = maxChars - chars;
    $('#counter').html(diff);   
    // Habilitar boton
    $('#tweet-button').prop( 'disabled', false );
    // $(this).height($(this).prop('scrollHeight'));
    // Mientras que el alto sea menor
    while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
      $(this).height($(this).height() + 1);
    }; 
  });
  
  $('#tweet-button').click(function() {
    var textTweet=$('#tweet-box').val();
    var $div = $('<div>');
    $( "#container" ).append($('<div>'+textTweet+'</div>').addClass('show-tweets'));
  
  });
});
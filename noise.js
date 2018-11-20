$(document).ready(() => {
  $('.instrument').on('click', 'button', function() {
    // load
    $('#' + this.innerHTML + 'Audio')[0].play();
  });

  $('body').keypress( function(event) {
    // load 
    $('#' + event.key + 'Audio')[0];
  });
})

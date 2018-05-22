$(document).ready(() => {
  $('.instrument').on('click', 'button', function() {
    $('#' + this.innerHTML + 'Audio')[0].play();
  });

  $('body').keypress( function(event) {
    $('#' + event.key + 'Audio')[0].play();
  });
})

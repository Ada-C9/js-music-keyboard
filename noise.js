$(document).ready( function() {

  $('.instrument').on('click', 'button', function() {
    $('#' + this.innerHTML + 'Audio')[0].play();
  })

  $('.instrument').keypress( function(event) {
    $('#' + event.key + 'Audio')[0].play();

  })

});

// $('.note.c').click( function() {
//   $('#cAudio')[0].play();
// })

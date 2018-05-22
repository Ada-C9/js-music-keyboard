$(document).ready( function() {



  // $('.note.c').click( function() {
  //   $('#cAudio')[0].play();
  // })

  $('.instrument').on('click', 'button', function(event) {
    $('#' + this.innerHTML + 'Audio')[0].play();
  })



});

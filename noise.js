$(document).ready( function() {

  // $('.c').click(function() {
  //   $('#cAudio').get(0).load();
  //   $('#cAudio').get(0).play();
  //   })


  $('.note').click(function() {
    let clickSound = $('#' + $(this).html() + 'Audio');
    clickSound.get(0).load();
    clickSound.get(0).play();
  })

  $('body').keydown(function(event){
    let keySound = $(`#${event.key}Audio`)
    keySound.get(0).load();
    keySound.get(0).play();
  })

}); //end of document.ready

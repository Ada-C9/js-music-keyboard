$(document).ready( function() {

  $('.c').click(function() {
    // alert('clicked on c');
    $('#cAudio').get(0).load();
    $('#cAudio').get(0).play();
    })

});

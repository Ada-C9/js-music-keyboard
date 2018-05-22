$(document).ready( function() {
  // on clicks
  $('.instrument').on('click', 'button', function(event) {
    document.getElementById(`${$(this).html()}Audio`).load();
    document.getElementById(`${$(this).html()}Audio`).play();
  });

  // on press
  $('body').keypress(function(event){
    document.getElementById(`${event.key}Audio`).load();
    document.getElementById(`${event.key}Audio`).play();
  });

});

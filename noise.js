let play  = function(key) {
  key.load();
  key.play();
};

$(document).ready( function() {
  
  $('.instrument button').click(function() {
    let note = document.getElementById($(this).html() + 'Audio');
    play(note);
  });

  $('body').keydown(function(event) {
    let note = document.getElementById(event.key + 'Audio');
    play(note);
  });

});

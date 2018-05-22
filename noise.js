let play  = function(key) {
  key.load();
  key.play();
};

$(document).ready( function() {
  $('.instrument button').click(function() {
    let key = $(this).html() + 'Audio';
    let note = document.getElementById(key);
    play(note);
  });
});

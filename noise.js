let play  = function(key) {
  key.load();
  key.play();
};

$(document).ready( function() {

  $('.instrument button').click(function() {
    let key = $(this).htmls();
    let note = $('#' + key + 'Audio')
    play(note);
  }
});

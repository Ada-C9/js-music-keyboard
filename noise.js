$(document).ready( function() {
  // your code here
  $('.instrument > .note').click(function() {
    let tone = $(this).html();
    play(tone);
  });

  function play(tone) {
      let audio = document.getElementById(tone + 'Audio');
      audio.load();
      audio.play();
    }
    $('body').keydown(function(event) {
      let tone = event.key.toLowerCase();
      play(tone);
    });
});

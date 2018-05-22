$(document).ready( function() {
  // your code here
  $('.instrument > .note').click(function() {
    let tone = $(this).html();
    play(tone);
  });

  function play(tone) {
    let tones = ['c','d','e','f','g','a','b'];
    if (tones.includes(tone, 0)) {

      let audio = document.getElementById(tone + 'Audio');
      audio.load();
      audio.play();
    }}

  $('body').keydown(function(event) {
    let tone = event.key.toLowerCase();
    play(tone);
  });
});

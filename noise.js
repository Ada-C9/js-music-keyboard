$(document).ready( function() {
  $( '.c' ).click(function() {
    $('#cAudio')[0].play();
  });

  $( '.d' ).click(function() {
    $('#dAudio')[0].play();
  });

  $( '.e' ).click(function() {
    $('#eAudio')[0].play();
  });

  $( '.f' ).click(function() {
    $('#fAudio')[0].play();
  });

  $( '.g' ).click(function() {
    $('#gAudio')[0].play();
  });

  $( '.a' ).click(function() {
    $('#aAudio')[0].play();
  });

  $( '.b' ).click(function() {
    $('#bAudio')[0].play();
  });

  // keyboard to play tones
  $( document ).on('keypress',function(event) {
    switch (event.key) {
      case 'c': { $('#cAudio')[0].play(); }
        break;
      case 'd': { $('#dAudio')[0].play(); }
        break;
      case 'e': { $('#eAudio')[0].play(); }
        break;
      case 'f': { $('#fAudio')[0].play(); }
        break;
      case 'g': { $('#gAudio')[0].play(); }
        break;
      case 'a': { $('#aAudio')[0].play(); }
        break;
      case 'b': { $('#bAudio')[0].play(); }
        break;
      default: break;
    }
  });
});

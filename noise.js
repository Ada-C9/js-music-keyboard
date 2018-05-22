$(document).ready( function() {
  // your code here

  // Clicking.

  $( '.c' ).click(function() {
    $('audio#cAudio')[0].play()
  });

  $( '.d' ).click(function() {
    $('audio#dAudio')[0].play()
  });

  $( '.e' ).click(function() {
    $('audio#eAudio')[0].play()
  });

  $( '.f' ).click(function() {
    $('audio#fAudio')[0].play()
  });

  $( '.g' ).click(function() {
    $('audio#gAudio')[0].play()
  });

  $( '.a' ).click(function() {
    $('audio#aAudio')[0].play()
  });

  $( '.b' ).click(function() {
    $('audio#bAudio')[0].play()
  });

// key depressions. a is 65, g is 71, the rest are obvious

    $('body').keydown((event) => {
      if (event.key == 'a') {
        $('audio#aAudio')[0].play();
      } else if (event.key == 'b') {
        $('audio#bAudio')[0].play();
      } else if (event.key == 'c') {
        $('audio#cAudio')[0].play();
      } else if (event.key == 'd') {
        $('audio#dAudio')[0].play();
      } else if (event.key == 'e') {
        $('audio#eAudio')[0].play();
      } else if (event.key == 'f') {
        $('audio#fAudio')[0].play();
      } else if (event.key == 'g') {
        $('audio#gAudio')[0].play();
      }
    });
});

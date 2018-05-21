$(document).ready( function() {

  // $('.c').click( function() {
  //   $('#cAudio').get()[0].play();
  // });
  //
  // $('body').keydown( function(event) {
  //   if (event.keyCode === 67 ) {
  //     $('#cAudio').get()[0].play();
  //   }
  // });
  //
  // $('.d').click( function() {
  //   $('#dAudio').get()[0].play();
  // });
  //
  // $('body').keydown( function(event) {
  //   if (event.keyCode === 68 ) {
  //     $('#dAudio').get()[0].play();
  //   }
  // });
  //
  // $('.e').click( function() {
  //   $('#eAudio').get()[0].play();
  // });
  //
  // $('body').keydown( function(event) {
  //   if (event.keyCode === 69 ) {
  //     $('#eAudio').get()[0].play();
  //   }
  // });
  //
  // $('.f').click( function() {
  //   $('#fAudio').get()[0].play();
  // });
  //
  // $('body').keydown( function(event) {
  //   if (event.keyCode === 70 ) {
  //     $('#fAudio').get()[0].play();
  //   }
  // });
  //
  // $('.g').click( function() {
  //   $('#gAudio').get()[0].play();
  // });
  //
  // $('body').keydown( function(event) {
  //   if (event.keyCode === 71 ) {
  //     $('#gAudio').get()[0].play();
  //   }
  // });
  //
  // $('.a').click( function() {
  //   $('#aAudio').get()[0].play();
  // });
  //
  // $('body').keydown( function(event) {
  //   if (event.keyCode === 65 ) {
  //     $('#aAudio').get()[0].play();
  //   }
  // });
  //
  // $('.b').click( function() {
  //   $('#bAudio').get()[0].play();
  // });
  //
  // $('body').keydown( function(event) {
  //   if (event.keyCode === 66 ) {
  //     $('#bAudio').get()[0].play();
  //   }
  // });

  const NOTES = ['a','b', 'c', 'd', 'e', 'f', 'g']

  for (let i = 0; i < NOTES.length; i++) {
    let note = NOTES[i]
    $(`.${note}`).click( function() {
      $(`#${note}Audio`).get()[0].play();
    })
  }

  // $('body').keydown( function(event) {
  //   if (event.keyCode === 66 ) {
  //     $('#bAudio').get()[0].play();
  //   }
  // });


});

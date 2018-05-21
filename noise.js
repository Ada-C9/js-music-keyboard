$(document).ready( function() {

// Trigger the appropriate tone when someone clicks inside a box:
  $('.instrument').on('click', 'button', function(event) {
    $(`#${$(this).html()}Audio`).get(0).load();
    $(`#${$(this).html()}Audio`).get(0).play();
  });

// Trigger the appropriate tone when someone presses a key on the keyboard.
  $('body').keypress(function(event) {
    $(`#${event.key}Audio`).get(0).load();
    $(`#${event.key}Audio`).get(0).play();
  });
});



// console.log($(this)) // button.note.c
// console.log($($(this).html())) // c
// console.log($(`#${$(this).html()}Audio`)) // "#cAudio"
// console.log($(`#${$(this).html()}Audio`).get(0)) // <audio id="cAudio">
// // gets the whole section with the id cAudio

// const stopAllAudio = function stopAllAudio() {
//   $('audio').trigger('pause').prop('currentTime', 0);
// };

$(document).ready( function() {
  // $('body').on('click', 'button', function(event) {
  $('body').keydown(function(event){
    if (event.keyCode >= 65 && event.keyCode <= 71) {
      // stopAllAudio();
      $('audio').trigger('pause').prop('currentTime', 0);
      let soundTarget = event.key + "Audio";
      $(`#${soundTarget}`).trigger('play');
    }
  });

  $('button').on('click', function(event) {
    $('audio').trigger('pause').prop('currentTime', 0);
    let soundTarget = event.currentTarget.classList[1] + "Audio";
    $(`#${soundTarget}`).trigger('play');
  });

});
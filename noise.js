const stopAllAudio = function stopAllAudio() {
  $('audio').trigger('pause').prop('currentTime', 0);
};

let playAudio = function playAudio(targetSound) {
  stopAllAudio();
  $(`#${targetSound + 'Audio'}`).trigger('play');
};

$(document).ready( function() {
  $('body').keydown(function(event){
    if (event.keyCode >= 65 && event.keyCode <= 71) { playAudio(event.key) }
  });

  $('button').on('click', function(event) { playAudio(event.currentTarget.classList[1]); });

});
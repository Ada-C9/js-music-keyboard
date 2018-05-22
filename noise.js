const playSound = function(letter) {
  let sound = $(`#${letter}Audio`)[0];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

$(document).ready( function() {
  $('.note').click(function(event) {
    const letter = event.target.className.split(" ")[1];
    playSound(letter);
  });

  $(document).keydown(function(event) {
    const letter = event.key;
    playSound(letter);
  });
});

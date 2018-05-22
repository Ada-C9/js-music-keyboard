$(document).ready( function() {


  // $('body').on('click', 'button', function(event) {
  $('body').keydown(function(event){
    if ((event.keyCode === 65) || (event.keyCode === 67)) {
      $('audio').trigger('pause').prop('currentTime', 0);
      let soundTarget = event.key + "Audio";
      console.log(soundTarget);

      // $('audio').trigger('pause').prop('currentTime', 0);
      // if(soundTarget){ // && soundTarget.currentTime > 0)
      //   console.log(soundTarget.currentTime);
      //   soundTarget.currentTime = 0;
      // }
      // if (soundTarget.paused) {
      $(`#${soundTarget}`).trigger('play');

    }
  });

  $('button').on('click', function(event) {
    // console.log(event);
    // function stopAllOtherAudio() {
    // if(prevTarget != null) {
    //   $(`#${prevTarget}`).finish();
    // }
    // if(currAudioClass != null) {
    //   $('currAudioClass').pause();
    // }

      // $('audio').removeClass();
    // }
    // let targer = ${`classList.};
    // $('audio').trigger('pause');
    // $('audio').currentTime = 0;
    $('audio').trigger('pause').prop('currentTime', 0);
    let soundTarget = event.currentTarget.classList[1] + "Audio";
    console.log(soundTarget);

    // $('audio').trigger('pause').prop('currentTime', 0);
    // if(soundTarget){ // && soundTarget.currentTime > 0)
    //   console.log(soundTarget.currentTime);
    //   soundTarget.currentTime = 0;
    // }
    // if (soundTarget.paused) {
      $(`#${soundTarget}`).trigger('play');
      // audio.play();
    // }else{
    //   $('soundTarget').pause();
    //   // $(`#${soundTarget}`).trigger('pause');
    //   $('soundTarget').currentTime = 0
    // }
    // soundTarget.currentTime = 0;

    // $(`#${soundTarget}`).trigger('play');
    // if(currAudioClass != null) {
    //   $(`#${currAudioClass}`).trigger('play');
    // }
    // currAudioClass = soundTarget;

    // $(`#${soundTarget}`).addClass('to_play').trigger('play');
    // console.log(event);

    // console.log(soundTarget);

    // console.log(`$(this).html()`);
    // if ((event.keyCode === 32) || (event.keyCode === 13)) {
    //   let target = $('#color-box');
    //   target.removeClass();
    //   target.addClass(nextColor());
    // }
  });
});
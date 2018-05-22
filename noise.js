$(document).ready( function() {

  let playNote = function(note){
    let musicID = "#"+note+"Audio";
    $(musicID)[0].load();
    $(musicID)[0].play();
  };

  $(".instrument").on("click", "button", function(event){
    let musicTone = $(this).attr("class").substr(-1);
    playNote(musicTone);
  });

  $("body").on("keydown", function(event){
     playNote(event.key);
   });
});

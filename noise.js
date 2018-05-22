$(document).ready( function() {

  $('.note').click( function(){
    const note = $( this ).attr("class").split(" ")[1];
    $(`#${note}Audio`)[0].load();
    $(`#${note}Audio`)[0].play();
  });

  $('body').keydown( function(event){
    $(`#${event.key}Audio`)[0].load();
    $(`#${event.key}Audio`)[0].play();
  });

});

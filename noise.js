$(document).ready( function() {
  // https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/10-JavaScript/jquery-events.md

  $('.instrument').on('click', 'button', function(event) {
    $(`#${$(this).html()}Audio`).get(0).load();
    $(`#${$(this).html()}Audio`).get(0).play();
  });

  $('body').keydown((event) => {
    $(`#${event.key}Audio`).get(0).load();
    $(`#${event.key}Audio`).get(0).play();
  });

});

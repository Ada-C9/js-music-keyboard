$(document).ready( function() {
  $('.instrument').on('click', 'button', function() {
    $('#' + $(this).html() + 'Audio').get(0).play()
  })

  const keyBindings = ['c','d','e','f','g','a','b']

  $('.instrument').keydown(function(event) {
    if (keyBindings.includes(event.key)) {
      $('#' + event.key + 'Audio').get(0).play()
    }
  })
});

$(document).ready( function() {
  $('div.instrument').on('click', 'button', function(){
    console.log($(this).html());
    $( '#'+$(this).html()+'Audio' ).get(0).play();
  });

  let keyBindings = { 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 65:'a', 66:'b' }

  $('body').keydown( function(event){
    if ( Object.keys(keyBindings).includes( event.keyCode.toString() ) ){
      $( '#' + keyBindings[event.keyCode] + 'Audio' ).get(0).play();
    }
  });

});

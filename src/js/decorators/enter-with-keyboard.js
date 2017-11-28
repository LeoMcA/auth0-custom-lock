module.exports = function( element ) {
  var KEY_ENTER = 13;
  var button = document.getElementById( element.getAttribute( 'data-enter-action' ) );

  if ( button && button.nodeName === 'BUTTON' ) {
    element.addEventListener( 'keyup', function( event ) {
      if ( event.which === KEY_ENTER ) {
        button.click();
      }
    });
  }
}

// Show cover modal
$( function() {
  // Click to show modal
  $("img#popup").click( function( event ) {
    event.stopPropagation();
    // write classes and css to tags
    $(".modal").fadeIn( "slow" );
    $("#close").fadeIn( "slow" );
  });
  // Make sure that clicking the modal wont close the modal
  $(".image").click( function( event ) {
    event.stopPropagation();
  });
  // make the background close the modal on click
  $(".modal").click( function() {
    // change body css and remove classes
    $(".modal").fadeOut( "slow" );
    $("#close").fadeOut( "slow" );
  });
});
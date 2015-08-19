// Show larger image
$('document').ready(function() {
  // Click to show larger image
  $("img#popup").click( function( event ) {
    event.stopPropagation();
    // write classes and css to tags
    $("body, html").addClass('overflow');
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
    $("body, html").removeClass('overflow');
    $(".modal").fadeOut( "slow" );
    $("#close").fadeOut( "slow" );
  });
});

// Hover image effect
$('document').ready(function() {
  // mouseover image to intiate affect
  $("img#popup").mouseover( function( event ) {
    event.stopPropagation();
    // write classes and css to tags
    $("article").addClass('light');
    $(".grizz-container").addClass('dark');
  });
  // mouseout will return to normal mode
  $("img#popup").mouseout( function() {
    // change body css and remove classes
    $("article").removeClass('light');
    $(".grizz-container").removeClass('dark');
  });
});
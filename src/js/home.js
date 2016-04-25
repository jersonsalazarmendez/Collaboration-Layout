/*! navigation-bar v1.0 
// Developed by Jean Frank Arias Sánchez, Jerson Salazar Mendez, Oscar Viques Segura
*/
$.getJSON( "js/navigation.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li class='menu-item'><a href='" + val + "'>"+ key +"</a></li>" );
  });
 
  $( "<ul/>", {
    "class": "navigation-menu",
    html: items.join( "" )
  }).appendTo( "nav" );
});


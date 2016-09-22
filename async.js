for (var i = 0; i < 3; i++) {
  var counter = 0;
  setTimeout(function() { console.log(counter); counter++;}, (1000 * i) );
}

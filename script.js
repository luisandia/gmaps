(function(window, google,mapster) {
  
var options = mapster.MAP_OPTIONS;


  element = document.getElementById('map-canvas'),
  // map
  map = new google.maps.Map(element, options);
  
}(window, google, window.Mapster || (window.Mapster ={})));
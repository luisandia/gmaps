(function(window,mapster) {
  
var options = mapster.MAP_OPTIONS;


  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element,options);
  map.zoom(18);

  
}(window, window.Mapster || (window.Mapster ={})));
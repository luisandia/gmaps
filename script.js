(function(window,mapster) {
  
var options = mapster.MAP_OPTIONS;


  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element,options);
  //map.zoom(18);

  /*google.maps.event.addListener(map.Gmap,'click',function(e){
  	console.log(e);
  });

  google.maps.event.addListener(map.Gmap,'dragend',function(e){
  	console.log(e);
  });*/
  
  map._on("click",function(e){

  	console.log("click");
  });


 map.addMarker(37.791350,-122.435883,true);

}(window, window.Mapster || (window.Mapster ={})));
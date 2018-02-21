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
  
  /*map._on("click",function(e){

  	console.log("click");
  });
*/

 var marker= map.addMarker({
 	id:1,
 	lat:37.791350,
 	lng:-122.435883,
 	visible:true,
 	draggable:true,
 	icon:'icon.png',
 	event:{
 		name:"click",
 		callback:function(){
 			console.log("mi evento mark");
 		}
 	},
 	content:"i like food"
 });





}(window, window.Mapster || (window.Mapster ={})));
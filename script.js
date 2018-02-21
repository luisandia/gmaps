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
/*
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


 var marker2 = map.addMarker({
 	lat:37.791350,
 	lng:-122.485883,
 	content:"rico",
 	id:2

 });
//map._removeMarker(marker2);

var found= map.findBy(function(marker){
	return marker.id ===2;
});



console.log(found);

map.removeBy(function(marker){
	return marker.id ===2;

});

*/

for ( var i = 0;i<10;i++){
	map.addMarker({
		 	lat:37.781350+ Math.random(),
 	lng:-122.485883+ Math.random(),
 	content:"rico",
 	id:2
	})

	map.addMarker({
		 	lat:37.791350+Math.random(),
 	lng:-122.435883+ Math.random(),
 	draggable:true,
 	content:"rico",
 	 	events:[{
 		name:"click",
 		callback:function(){
 			console.log("mi evento mark");
 		}
 	},
 	{
 		name:"dragend",
 		callback:function(){
 			console.log("mi evento drag");
 		}
 	}
 	]
	})

}
map.removeBy(function(marker){
	return marker.id ===2;

});
}(window, window.Mapster || (window.Mapster ={})));
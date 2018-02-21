(function(window,google,mapster){


mapster.MAP_OPTIONS={
	  // map options
    center: {
      lat: 37.791350,
      lng: -122.435883
    },
    zoom: 10,
    //disableDefaultUI:true //boton satelite
    //scrollwheel:false, //deshabilita scroll mouse
    //draggable:false,//Bloquea mapa
    //mapTypeId:google.maps.MapTypeId.HYBRID,//SATELLITE - ROADMAP
    //maxZoom:11,
    //minZoom:9,

    zoomControlOptions:{

    	position:google.maps.ControlPosition.TOP_LEFT,//LEFT_BOTTOM
    	style:google.maps.ZoomControlStyle.DEFAULT,    	
    },
    panControlOptions:{
    	position:google.maps.ControlPosition.LEFT_BOTTOM,
    },
    cluster:{
    	options:{
    		styles:[
    		{
    			url:'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m2.png',
    			height:56,
    			width:55,
    			textColor:"#F00",
    			textSize:18
    		},{
    			url:'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m1.png',
    			height:56,
    			width:55
    		},
    		]
    	}
    }
}

}(window, google, window.Mapster || (window.Mapster ={})));
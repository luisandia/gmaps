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
    }
}

}(window, google, window.Mapster || (window.Mapster ={})));
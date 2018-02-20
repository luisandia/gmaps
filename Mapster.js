(function(window,google,mapster){


var Mapster = (function(){

    function Mapster(elements,opts){
        this.gMap = new google.maps.Map(element,opts);
    }
    Mapster.prototype={

        zoom:function(level){
            if(level){
                this.gMap.setZoom(level)
            }else {
                return this.gMap.getZoom();
            }
        }

    }
    return Mapster;
}());

Mapster.create = function(element,opts){
    return new Mapster(element,opts);
}

    window.Mapster = Mapster;



}(window, google));
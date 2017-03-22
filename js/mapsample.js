   $(function() {

   	var getPoints = function () {
   		 // map center
       
        //NUS
        var NUS = new google.maps.LatLng(1.2966, 103.7764);
        //UTOWN
        var UTown = new google.maps.LatLng(1.2966, 103.7764);
        //Business School
        var business_school = new google.maps.LatLng(1.29417, 103.77389);
        //Engineering Faculty
        var engineering = new google.maps.LatLng(1.3003, 103.7708);
        //Central Library
        var clb = new google.maps.LatLng(1.2966, 103.7732);
        //Science Faculty
        var science = new google.maps.LatLng(1.29528932, 103.78297091);
        // map options,
        var myOptions = {
          zoom: 16,
          center: NUS
        };


        // standard map
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // heatmap layer
        var heatmap = new HeatmapOverlay(map, 
          {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            "radius": 0.001,
            "maxOpacity": 1, 
            // scales the radius based on map zoom
            "scaleRadius": true, 
            // if set to false the heatmap uses the global maximum for colorization
            // if activated: uses the data maximum within the current map boundaries 
            //   (there will always be a red spot with useLocalExtremas true)
            "useLocalExtrema": false,
            // which field name in your data represents the latitude - default "lat"
            latField: 'lat',
            // which field name in your data represents the longitude - default "lng"
            lngField: 'lng',
            // which field name in your data represents the data value - default "value"
            valueField: 'count'
          }
        );
        var NUS = new google.maps.Marker({
          position: NUS,
          map: map
        });

        var businessSchool = new google.maps.Marker({
          position: business_school,
          map: map
        });

        var apiLinkActual = "http://localhost:9090/nusdcapi/devicecountzone";
        var EnginAdmCountString;
        var EnginAdmCount;
        $.getJSON(apiLinkActual, function( data ) {
          arrActual = data["counts"];
          for (var i = 0; i < arrActual.length; i++) {
            if(arrActual[i].locationName == "KR-ENGADM"){
              EnginAdmCountString = arrActual[i].deviceCount;
            }
          }
          EnginAdmCount = parseInt(EnginAdmCountString);
        }); 

        var testData = {
          max: 300,
          data: [{lat: 1.3046, lng:103.7723, count:600}, //UTown
          {lat: 1.3003, lng:103.7708, count: 50},//Engineering Faculty
          {lat: 1.29417, lng:103.77389, count: 40},//Business school
         ]
        };
        heatmap.setData(testData);
   	}
   	getPoints();
       
});
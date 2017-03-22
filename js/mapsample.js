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
        var engineering_faculty = new google.maps.LatLng(1.3003, 103.7708);
        //Central Library
        var clb = new google.maps.LatLng(1.2966, 103.7732);
        //Science Faculty
        var NUH = new google.maps.LatLng(1.29468866, 103.78327668);
        //UCC
        var UCC = new google.maps.LatLng(1.30155871, 103.77220452);
        //CLB


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
          map: map,
          label:{
            color: 'black',
            fontWeight: 'bold',
            text: 'NUS'
          },
          icon: {
            labelOrigin: new google.maps.Point(11, 50),
            size: new google.maps.Size(22, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(11, 40),
          },
        });

        var biz_marker = new google.maps.Marker({
          position: business_school,
          map: map
        });

        var nuh_marker = new google.maps.Marker({
          position: NUH,
          map:map
        });

        var eng_marker = new google.maps.Marker({
          position: engineering_faculty,
          map:map
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
          console.log(EnginAdmCount);
        }); 
        
        
        var testData = {
          max: 700,
          data: [
          {lat: 1.3003, lng:103.7708, count: 700},//Engineering Faculty
          {lat: 1.29417, lng:103.77389, count: 200},//Business school
          {lat: 1.3046, lng:103.7723, count:600}, //UTown
          ]
        };
        testData.data.push({last:1.3047, lng:103.78, count:EnginAdmCount});
        heatmap.setData(testData);
      }
      getPoints();

    });
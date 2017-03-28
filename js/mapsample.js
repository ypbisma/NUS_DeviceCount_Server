   $(function() {

   	var getPoints = function () {
   		 // map center

        //NUS

        var NUS = new google.maps.LatLng(1.2966, 103.7764);
        //UTOWN
        var UTown = new google.maps.LatLng(1.3051, 103.7730);
        var TownPlaza = new google.maps.LatLng(1.3041115164982047,103.77345442771912);
        var SRC = new google.maps.LatLng(1.3045030175505317,103.77239763736725);
        var CREATE = new google.maps.LatLng(1.3038885,103.77372430000003);
        var ERC = new google.maps.LatLng(1.3056453421905996,103.77280533313751);
        var Tembusu = new google.maps.LatLng(1.3063171,103.773775);
        var TembusuMPH = new google.maps.LatLng(1.3059832127593396,103.77389430999756); 
        var RC4 = new google.maps.LatLng(1.3082439,103.7734074);
        var RC4MPH = new google.maps.LatLng(1.307929989913052,103.77327740192413);
        var Cinnamon = new google.maps.LatLng(1.3067015,103.77352689999998);
        var CAPT = new google.maps.LatLng(1.3077332,103.77313579999998);
        var CAPTMPH = new google.maps.LatLng(1.3072676568083856,103.77313256263733);
        var YNCElm = new google.maps.LatLng(1.3062942681634273,103.77243518829346);
        var YNCRC1A = new google.maps.LatLng(1.3072274341445786,103.77202212810516);
        var YNCRC1B = new google.maps.LatLng(1.3079728940757434,103.7725156545639);
        var GRS = new google.maps.LatLng(1.3052055740807353,103.77389967441559);
        
        //ENGADM
        var LT7A = new google.maps.LatLng(1.3005611891086315,103.7708929181099);
        var LT7 = new google.maps.LatLng(1.30015359833315,103.77106189727783);
        var LT6 = new google.maps.LatLng(1.3005611891086315,103.7708929181099);
        var E4 = new google.maps.LatLng(1.2983677063966417,103.77246737480164);
        var E5 = new google.maps.LatLng(1.2980244717657412,103.77238154411316);
        var YSTCM = new google.maps.LatLng(1.3022183667149776,103.77290725708008);
        var UCC = new google.maps.LatLng(1.3015211723854576,103.77187728881836);
        var EW1 = new google.maps.LatLng(1.2987592083406052,103.77065420150757);
        var E1A = new google.maps.LatLng(1.2993759578553312,103.77078294754028);
        var E2A = new google.maps.LatLng(1.2987538453006877,103.77137839794159);
        //AKIENG
        var E1 = new google.maps.LatLng(1.29876457138051,103.77112358808517);
        var E2 = new google.maps.LatLng(1.2994671295099474,103.77109944820404);    
        var E3 = new google.maps.LatLng(1.299333053546131,103.77168416976929);
        var TechnoEdge = new google.maps.LatLng(1.2978421283491335,103.77158761024475);
        var SDE1 = new google.maps.LatLng(1.2973809067072661,103.77063274383545);
        var SDE2 = new google.maps.LatLng(1.2972629197621115,103.77115845680237);
        var SDE3 = new google.maps.LatLng(1.2982282673334569,103.77045035362244);
        var LT5 = new google.maps.LatLng(1.2983140759886376,103.77124428749084);
        var LT2 = new google.maps.LatLng(1.2994349512792844,103.7713086605072);
        var CELC = new google.maps.LatLng(1.2969465002002176,103.77148568630219);

        //CCB
        var LT3 = new google.maps.LatLng(1.2977080522991113,103.77335250377655);
        var CCELIBKR12A = new google.maps.LatLng(1.2963404761831323,103.77316474914551);

        //FBALAW
        var MochtarRiady = new google.maps.LatLng(1.2926238832445502,103.77425909042358);
        var AlumniBuilding = new google.maps.LatLng(1.2930368382844246,103.77361536026001);
        var Icube = new google.maps.LatLng(1.2928062270366798,103.77551436424255);
        var BIZ2 = new google.maps.LatLng(1.2936804044463994,103.77473652362823);
        var LT19 = new google.maps.LatLng(1.2937715763061486,103.77437710762024);
        var LT18 = new google.maps.LatLng(1.2935892325833807,103.77448976039886);
        var LT17 = new google.maps.LatLng(1.2937233088513853,103.7741357088089);
        var LT16 = new google.maps.LatLng(1.2940933593143584,103.77396136522293);
        var CELC = new google.maps.LatLng(1.2969465002002176,103.77148568630219);


        var dictionary = {
          "UTown-TLL": TownPlaza,
          "UTown-GRN": SRC,
          "UTown-CREATE": CREATE,
          "UTown-ERC": ERC,
          "UTown-Tembusu": Tembusu,
          "UTown-TMPH": TembusuMPH,
          "UT02-RC4": RC4,
          "UT01-RC4-MPH": RC4MPH,
          "UTown-Cinanmon": Cinnamon,
          "UT04-CAPT": CAPT,
          "UTown-CMPH": CAPTMPH,
          "UTown-YNC-EC": YNCElm,
          "UTown-YNC-RC1A": YNCRC1A,
          "UTown-YNC-RC1B": YNCRC1B,
          "UTown-GRS": GRS,

          "LT7A": LT7A,
          "LT7": LT7,
          "ENGADM-E1A": E1A,
          "E2A": E2A,
          "LT6":LT6,
          "ENGADM-E4": E4,
          "ENGADM-E5":E5,
          "ENGADM-YSTCM": YSTCM,
          "ENGADM-UCC": UCC,

          "AKIENG-E1": E1,
          "AKIENG-E2": E2,
          "AKIENG-E3":E3,
          "AKIENG-ENGINE CANTEEN": TechnoEdge,
          "AKIENG-SDE1": SDE1,
          "AKIENG-SDE2": SDE2,
          "AKIENG-SDE3": SDE3,
          "LT5": LT5,
          "LT2": LT2,
          "AKIENG-CELC": CELC,
          
          "FBALAW-MochtarRiyady": MochtarRiady,
          "FBALAW-Alumni": AlumniBuilding,
          "FBALAW-I3": Icube,
          "FBALAW-BIZ2": BIZ2,
          "LT19": LT19,
          "LT17": LT17,
          "LT16": LT16,
          "LT18": LT18

        }
        //business_schooliness School
        // var business_school = new google.maps.LatLng(1.29417, 103.77389);
        // //Engineering Faculty
        // var engineering_faculty = new google.maps.LatLng(1.3003, 103.7708);
        // //Central Library
        // var clb = new google.maps.LatLng(1.2966, 103.7732);
        // //Science Faculty
        // var NUH = new google.maps.LatLng(1.29468866, 103.78327668);
        // //UCC
        // var UCC = new google.maps.LatLng(1.30155871, 103.77220452);
        // //CLB


        // map options,
        var myOptions = {
          zoom: 17,
          center: UTown
        };


        // standard map
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // heatmap layer
        var heatmap = new HeatmapOverlay(map, 
        {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            "radius": 0.0009,
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
        // var NUS = new google.maps.Marker({
        //   position: UTown,
        //   map: map,
        //   label:{
        //     color: 'black',
        //     fontWeight: 'bold',
        //     text: 'NUS'
        //   },
        //   icon: {
        //     labelOrigin: new google.maps.Point(11, 50),
        //     size: new google.maps.Size(22, 40),
        //     origin: new google.maps.Point(0, 0),
        //     anchor: new google.maps.Point(11, 40),
        //   },
        // });


        // var nuh_marker = new google.maps.Marker({
        //   position: NUH,
        //   map:map
        // });

        // var eng_marker = new google.maps.Marker({
        //   position: engineering_faculty,
        //   map:map
        // });

        var apiLinkActual = "http://localhost:9090/nusdcapi/devicecountbuilding";

        var EnginAdmCountString;
        var EnginAdmCount;
        $.getJSON(apiLinkActual, function( data ) {
          arrActual = data["counts"];
          arrayOfCount = [];
          for (var i = 0; i < arrActual.length; i++) {
            if (dictionary[arrActual[i].locationName] != undefined) {
              arrayOfCount[arrActual[i].locationName] = parseInt(arrActual[i].deviceCount);
            
            }

          }
          EnginAdmCount = parseInt(EnginAdmCountString);

          dataArray = [];
          for (var key in dictionary) {
            var value = dictionary[key];
            dataArray.push({
              lat: value.lat(),
              lng: value.lng(),
              count: arrayOfCount[key]
            });
        }
        console.log(dataArray);
      var testData = {
          max: 400,
          data: dataArray
        };

      // var cinnamonMarker = new google.maps.Marker({
      //     position: Cinnamon,
      //     map: map,
      //     label:{
      //       color: 'black',
      //       fontWeight: 'bold',
      //       text: (arrayOfCount["UTown-Cinanmon"]).toString(),
      //     },
      //     icon: {
      //       labelOrigin: new google.maps.Point(11, 50),
      //       size: new google.maps.Size(22, 40),
      //       origin: new google.maps.Point(0, 0),
      //       anchor: new google.maps.Point(11, 40),
      //     },
      //   });
        // testData.data.push({last:1.3047, lng:103.78, count:EnginAdmCount});
        heatmap.setData(testData);
        }); 
        
      }
      getPoints();

    });
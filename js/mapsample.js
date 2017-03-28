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
        // var E3A = new google.maps.LatLng(1.3005611891086315,103.7708929181099);
        var E2A = new google.maps.LatLng(1.2987538453006877,103.77137839794159);
        var EA = new google.maps.LatLng(1.3002447699597008,103.77050399780273);
        var E4A = new google.maps.LatLng(1.2985607758560374,103.77254247665405);
        var LT7A = new google.maps.LatLng(1.3005611891086315,103.7708929181099);
        var E4 = new google.maps.LatLng(1.2983677063966417,103.77246737480164);
        var Tlab = new google.maps.LatLng(1.2995690272376812,103.77207040786743);
        var LT7 = new google.maps.LatLng(1.30015359833315,103.77106189727783);
        var LT6 = new google.maps.LatLng(1.3005611891086315,103.7708929181099);
        var UCC = new google.maps.LatLng(1.3015211723854576,103.77187728881836);
        var E5 = new google.maps.LatLng(1.2980244717657412,103.77238154411316);
        var EW1 = new google.maps.LatLng(1.2987592083406052,103.77065420150757);
        var YSTCM = new google.maps.LatLng(1.3022183667149776,103.77290725708008);
        var E1A = new google.maps.LatLng(1.2993759578553312,103.77078294754028);
        
        //AKIENG
        var TechnoEdge = new google.maps.LatLng(1.2978421283491335,103.77158761024475);
        var SDE1 = new google.maps.LatLng(1.2973809067072661,103.77063274383545);
        var SDE2 = new google.maps.LatLng(1.2972629197621115,103.77115845680237);
        var SDE3 = new google.maps.LatLng(1.2982282673334569,103.77045035362244);
        var E1 = new google.maps.LatLng(1.29876457138051,103.77112358808517);
        var E2 = new google.maps.LatLng(1.2994671295099474,103.77109944820404);    
        var E3 = new google.maps.LatLng(1.299333053546131,103.77168416976929);
        var LT1 = new google.maps.LatLng(1.2996870140751933,103.77156615257263);
        var LT5 = new google.maps.LatLng(1.2983140759886376,103.77124428749084);
        // var EW2 = new google.maps.LatLng(1.2994349512792844,103.7713086605072);
        var LT2 = new google.maps.LatLng(1.2994349512792844,103.7713086605072);
        var CELC = new google.maps.LatLng(1.2969465002002176,103.77148568630219);

        //CCB
        var LT3 = new google.maps.LatLng(1.2976678294827269,103.77329885959625);
        var KR12A = new google.maps.LatLng(1.2974291740923243,103.77487063407898);
        var CLB = new google.maps.LatLng(1.296651532776404,103.77318620681763);
        var S2S = new google.maps.LatLng(1.2975525240721932,103.77457022666931);
        var CDTL = new google.maps.LatLng(1.297118117594622,103.77385675907135);
        var KR11 = new google.maps.LatLng(1.2969625893314456,103.77536416053772);
        
        //FBALAW
        var MochtarRiady = new google.maps.LatLng(1.2926238832445502,103.77425909042358);
        var AlumniBuilding = new google.maps.LatLng(1.2930368382844246,103.77361536026001);
        var Icube = new google.maps.LatLng(1.2928062270366798,103.77551436424255);
        var BIZ2 = new google.maps.LatLng(1.2936804044463994,103.77473652362823);
        var LT19 = new google.maps.LatLng(1.2937715763061486,103.77437710762024);
        var LT18 = new google.maps.LatLng(1.2935892325833807,103.77448976039886);
        var LT17 = new google.maps.LatLng(1.2937233088513853,103.7741357088089);
        var LT16 = new google.maps.LatLng(1.2940933593143584,103.77396136522293);

        //SCIPGP
        var LT32 = new google.maps.LatLng(1.2960401456430173,103.77848625183105);
        // var S9 = new google.maps.LatLng(1.3041115164982047,103.77345442771912);
        // var S6 = new google.maps.LatLng(1.3045030175505317,103.77239763736725);
        var S3 = new google.maps.LatLng(1.2955252932056907,103.77865791320801);
        var S1 = new google.maps.LatLng(1.2956432802318223,103.77801418304443);
        var S4 = new google.maps.LatLng(1.2956540063248374,103.77929091453552);
        var S5 = new google.maps.LatLng(1.2954394844559582,103.77990245819092);
        var S8 = new google.maps.LatLng(1.296093776099226,103.77938747406006);
        var S4A = new google.maps.LatLng(1.295814897714557,103.77928018569946);
        var S2 = new google.maps.LatLng(1.295514567112141,103.77819657325745);
        // var LT22 = new google.maps.LatLng(1.3072676568083856,103.77313256263733);
        var S1A = new google.maps.LatLng(1.295675458510728,103.7779712677002);
        
        //ARTS
        var AS4 = new google.maps.LatLng(1.2945492185060976,103.77156615257263);
        var AS1 = new google.maps.LatLng(1.2952035103792303,103.77214550971985);
        var AS7 = new google.maps.LatLng(1.294415142281743,103.77107799053192);
        var Deck = new google.maps.LatLng(1.2947959187403935,103.77248883247375);
        var AS5 = new google.maps.LatLng(1.294275703000881,103.77183437347412);
        var AS3 = new google.maps.LatLng(1.2946296642373112,103.77112090587616);
        var AS2 = new google.maps.LatLng(1.295273229995101,103.7710565328598);
        var AS6 = new google.maps.LatLng(1.2956325541387688,103.77320766448975);
    
        //MEDNUH
        // var MD6 = new google.maps.LatLng(1.3051, 103.7730);
        // var CELS = new google.maps.LatLng(1.3041115164982047,103.77345442771912);
        var FOD = new google.maps.LatLng(1.2968660545425894,103.7819355726242);
        var MD7 = new google.maps.LatLng(1.296120591326904,103.78109335899353);
        var MD5 = new google.maps.LatLng(1.2964155588125856,103.78151178359985);
        var MD1 = new google.maps.LatLng(1.2953054082787012,103.7807446718216);
        var MD9 = new google.maps.LatLng(1.2966568958207745,103.78140449523926);
        var MD4 = new google.maps.LatLng(1.295771993344977,103.78095924854279);
        var MD10 = new google.maps.LatLng(1.296581813198471,103.78186583518982);
        var MD11 = new google.maps.LatLng(1.2960133304144994,103.78183901309967);
        var MD3 = new google.maps.LatLng(1.295771993344977,103.78144204616547);
        //SCIYIH
        var S11 = new google.maps.LatLng(1.2966622588651446,103.77891540527344);
        var S12 = new google.maps.LatLng(1.296978678462559,103.77866864204407);
        var YIH = new google.maps.LatLng(1.298517871532995,103.77481698989868);
        var UHALL = new google.maps.LatLng(1.297139569768121,103.7777030467987);
        var UHC = new google.maps.LatLng(1.2991024428717255,103.77642631530762);
        var S13 = new google.maps.LatLng(1.2967856088824041,103.77925872802734);
        var LT31 = new google.maps.LatLng(1.2968016980146497,103.78037989139557);
        var S14 = new google.maps.LatLng(1.2968714175865144,103.77974152565002);
        var S17 = new google.maps.LatLng(1.2976383327502994,103.7804925441742);
        var S16 = new google.maps.LatLng(1.2967963349705722,103.78026723861694);
        var S7 = new google.maps.LatLng(1.2963136609577823,103.77891540527344);
        var S15 = new google.maps.LatLng(1.297144932811448,103.78042280673981);
        var LT34 = new google.maps.LatLng(1.3062942681634273,103.77243518829346);
       

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
          //ENGADM
          "E2A": E2A,
          "ENGADM-EA":EA,
          "ENGADM-E4A":E4A,
          "LT7A": LT7A,
          "ENGADM-E4": E4,
          "ENGADM-TLAB": Tlab,
          "LT7": LT7,
          "LT6":LT6,
          "ENGADM-UCC": UCC,
          "ENGADM-E5":E5,
          "ENGADM-EW1":EW1,
          "ENGADM-YSTCM": YSTCM,
          "ENGADM-E1A": E1A,
          //AKIENG
          "AKIENG-ENGINE CANTEEN": TechnoEdge,
          "AKIENG-SDE1": SDE1,
          "AKIENG-SDE2": SDE2,
          "AKIENG-SDE3": SDE3,
          "AKIENG-E1": E1,
          "AKIENG-E2": E2,
          "AKIENG-E3":E3,
          "LT1":LT1,
          "LT5": LT5,
          "LT2": LT2,
          "AKIENG-CELC": CELC,
          //FBALAW
          "FBALAW-MochtarRiyady": MochtarRiady,
          "FBALAW-Alumni": AlumniBuilding,
          "FBALAW-I3": Icube,
          "FBALAW-BIZ2": BIZ2,
          "LT19": LT19,
          "LT17": LT17,
          "LT16": LT16,
          "LT18": LT18,
          //SCIPGP
          "LT32": LT32,
          "SCIPGP-S3": S3,
          "SCIPGP-S1": S1,
          "SCIPGP-S4": S4,
          "SCIPGP-S5": S5,
          "SCIPGP-S8": S8,
          "SCIPGP-S4A": S4A,
          "SCIPGP-S2": S2,
          "SCIPGP-S1A": S1A,
          //ARTS
          "ARTS-AS4": AS4,
          "ARTS-AS1": AS1,
          "ARTS-AS7": AS7,
          "ARTS-Canteen":Deck,
          "ARTS-AS5": AS5,
          "ARTS-AS3": AS3,
          "ARTS-AS2": AS2,
          "ARTS-AS6": AS6,
          //MEDNUH
          // "MEDNUH-MD6":MD6,
          // "MEDNUH-CELS": CELS,
          "MEDNUH-MD7":MD7,
          "MEDNUH-MD5":MD5,
          "MEDNUH-MD1":MD1,
          "MEDNUH-MD9":MD9,
          "MEDNUH-MD4":MD4,
          "MEDNUH-MD10":MD10,
          "MEDNUH-MD3":MD3,

          //SCIYIH
          "SCIYIH-S11":S11,
          "SCIYIH-S12":S12,
          "SCIYIH-YIH": YIH,
          "SCIYIH-UHALL": UHALL,
          "SCIYIH-S13": S13,
          "LT31": LT31,
          "SCIYIH-S14": S14,
          "SCIYIH-S17": S17,
          "SCIYIH-S7": S7,
          "SCIYIH-S15": S15,
          "LT34": LT34,

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
          max: 700,
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
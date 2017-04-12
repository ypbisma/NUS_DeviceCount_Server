// server.js contain all the links that are used to display the data in both the dynamic chart and the heatmap
// each link is used inside the HTML and Javascript codes
// server.js utilises Node.js express framework

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var filedc = "nusdc.db";
var filezbf = "zonebuildingfloor.db";

var sqlite3 = require("sqlite3").verbose();
var devicedb = new sqlite3.Database(filedc);
var zbfdb = new sqlite3.Database(filezbf);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;	//set our port

var path = require('path');

//	ROUTES FOR OUR API
// ===============

var router = express.Router();


//UNIVERSITY
// open localhost:9090/nusdcapi/devicecountuni
// returns the time series of device count at university level
router.get('/devicecountuni', function(req, res) {
	devicedb.serialize(function() {
		var uniDeviceCountList = [];
		devicedb.all("Select rowid AS id, uniId, uniName, deviceCount, time, date FROM AggregateUniversity", function(err, rows) {
			if(rows != undefined){
				for (var i = 0; i < rows.length; i++) {
					uniDeviceCountList.push({id: rows[i].id, locationId: rows[i].uniId, locationName: rows[i].uniName, deviceCount: rows[i].deviceCount, time: rows[i].time, date: rows[i].date});
				}	
			}
			res.json({counts: uniDeviceCountList});
		});
	});
});


// open localhost:9090/nusdcapi/forecastunima3
// returns the time series of forecasted count at university level using 3-step moving average method
router.get('/forecastunima3', function(req, res) {
	devicedb.serialize(function() {
		var forecastUniMa3 = [];
		devicedb.all("Select rowid AS id, uniId, uniName, ma3, time, date FROM ForecastUniMa3", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastUniMa3.push({id: rows[i].id, locationId: rows[i].uniId, locationName: rows[i].uniName, forecast: rows[i].ma3, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastUniMa3});
		});
	});
});


// open localhost:9090/nusdcapi/forecastunima5
// returns the time series of forecasted count at university level using 5-step moving average method
router.get('/forecastunima5', function(req, res) {
	devicedb.serialize(function() {
		var forecastUniMa5 = [];
		devicedb.all("Select rowid AS id, uniId, uniName, ma5, time, date FROM ForecastUniMa5", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastUniMa5.push({id: rows[i].id, locationId: rows[i].uniId, locationName: rows[i].uniName, forecast: rows[i].ma5, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastUniMa5});
		});
	});
});


// open localhost:9090/nusdcapi/forecastuniwa
// returns the time series of forecasted count at university level using weighted average method
router.get('/forecastuniwa', function(req, res) {
	devicedb.serialize(function() {
		var forecastUniWa = [];
		devicedb.all("Select rowid AS id, uniId, uniName, wa, time, date FROM ForecastUniWa", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastUniWa.push({id: rows[i].id, locationId: rows[i].uniId, locationName: rows[i].uniName, forecast: rows[i].wa, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastUniWa});
		});
	});
});

// open localhost:9090/nusdcapi/forecastunies
// returns the time series of forecasted count at university level using exponential smoothing method
router.get('/forecastunies', function(req, res) {
	devicedb.serialize(function() {
		var forecastUniEs = [];
		devicedb.all("Select rowid AS id, uniId, uniName, es, time, date FROM ForecastUniEs", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastUniEs.push({id: rows[i].id, locationId: rows[i].uniId, locationName: rows[i].uniName, forecast: rows[i].es, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastUniEs});
		});
	});
});



//BUILDING
// open localhost:9090/nusdcapi/devicecountbuilding
// returns the time series of device count at building level
router.get('/devicecountbuilding', function(req, res) {
	devicedb.serialize(function() {
		var buildingDeviceCountList = [];
		devicedb.all("Select rowid AS id, buildingId, buildingName, deviceCount, time, date FROM AggregateBuilding", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				buildingDeviceCountList.push({id: rows[i].id, locationId: rows[i].buildingId, locationName: rows[i].buildingName, deviceCount: rows[i].deviceCount, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({counts: buildingDeviceCountList});
		});
	});
});

// open localhost:9090/nusdcapi/forecastbuildingma3
// returns the time series of forecasted count at building level using 3-step moving average method
router.get('/forecastbuildingma3', function(req, res) {
	devicedb.serialize(function() {
		var forecastBuildingMa3 = [];
		devicedb.all("Select rowid AS id, buildingId, buildingName, ma3, time, date FROM ForecastBuildingMa3", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastBuildingMa3.push({id: rows[i].id, locationId: rows[i].buildingId, locationName: rows[i].buildingName, forecast: rows[i].ma3, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastBuildingMa3});
		});
	});
});

// open localhost:9090/nusdcapi/forecastbuildingma5
// returns the time series of forecasted count at building level using 5-step moving average method
router.get('/forecastbuildingma5', function(req, res) {
	

	devicedb.serialize(function() {
		var forecastBuildingMa5 = [];
		devicedb.all("Select rowid AS id, buildingId, buildingName, ma5, time, date FROM ForecastBuildingMa5", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastBuildingMa5.push({id: rows[i].id, locationId: rows[i].buildingId, locationName: rows[i].buildingName, forecast: rows[i].ma5, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastBuildingMa5});
		});
	});
});


// open localhost:9090/nusdcapi/forecastbuildingwa
// returns the time series of forecasted count at building level using weighted average method
router.get('/forecastbuildingwa', function(req, res) {
	

	devicedb.serialize(function() {
		var forecastBuildingWa = [];
		devicedb.all("Select rowid AS id, buildingId, buildingName, wa, time, date FROM ForecastBuildingWa", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastBuildingWa.push({id: rows[i].id, locationId: rows[i].buildingId, locationName: rows[i].buildingName, forecast: rows[i].wa, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastBuildingWa});
		});
	});
});

// open localhost:9090/nusdcapi/forecastbuildinges
// returns the time series of forecasted count at building level using exponential smoothing method
router.get('/forecastbuildinges', function(req, res) {
	devicedb.serialize(function() {
		var forecastBuildingEs = [];
		devicedb.all("Select rowid AS id, buildingId, buildingName, es, time, date FROM ForecastBuildingEs", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastBuildingEs.push({id: rows[i].id, locationId: rows[i].buildingId, locationName: rows[i].buildingName, forecast: rows[i].es, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastBuildingEs});
		});
	});
});

//ZONE
// open localhost:9090/nusdcapi/devicecountzone
// returns the time series of device count at zone level
router.get('/devicecountzone', function(req, res) {
	devicedb.serialize(function() {
		var zoneDeviceCountList = [];
		devicedb.all("Select rowid AS id, zoneId, zoneName, deviceCount, time, date FROM AggregateZone", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				zoneDeviceCountList.push({id: rows[i].id, locationId: rows[i].zoneId, locationName: rows[i].zoneName, deviceCount: rows[i].deviceCount, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({counts: zoneDeviceCountList});
		});
	});
});

// open localhost:9090/nusdcapi/forecastzonema3
// returns the time series of forecasted count at zone level using 3-step moving average method
router.get('/forecastzonema3', function(req, res) {
	devicedb.serialize(function() {
		var forecastZoneMa3 = [];
		devicedb.all("Select rowid AS id, zoneId, zoneName, ma3, time, date FROM ForecastZoneMa3", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastZoneMa3.push({id: rows[i].id, locationId: rows[i].zoneId, locationName: rows[i].zoneName, forecast: rows[i].ma3, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastZoneMa3});
		});
	});
});

// open localhost:9090/nusdcapi/forecastzonema5
// returns the time series of forecasted count at zone level using 5-step moving average method
router.get('/forecastzonema5', function(req, res) {

	devicedb.serialize(function() {
		var forecastZoneMa5 = [];
		devicedb.all("Select rowid AS id, zoneId, zoneName, ma5, time, date FROM ForecastZoneMa5", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastZoneMa5.push({id: rows[i].id, locationId: rows[i].zoneId, locationName: rows[i].zoneName, forecast: rows[i].ma5, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastZoneMa5});
		});
	});
});


// open localhost:9090/nusdcapi/forecastzonewa
// returns the time series of forecasted count at zone level using weighted average method
router.get('/forecastzonewa', function(req, res) {

	devicedb.serialize(function() {
		var forecastZoneWa = [];
		devicedb.all("Select rowid AS id, zoneId, zoneName, wa, time, date FROM ForecastZoneWa", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastZoneWa.push({id: rows[i].id, locationId: rows[i].zoneId, locationName: rows[i].zoneName, forecast: rows[i].wa, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastZoneWa});
		});
	});
});

// open localhost:9090/nusdcapi/forecastzoneees
// returns the time series of forecasted count at zone level using exponential smoothing method
router.get('/forecastzonees', function(req, res) {
	devicedb.serialize(function() {
		var forecastZoneEs = [];
		devicedb.all("Select rowid AS id, zoneId, zoneName, es, time, date FROM ForecastZoneEs", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastZoneEs.push({id: rows[i].id, locationId: rows[i].zoneId, locationName: rows[i].zoneName, forecast: rows[i].es, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast: forecastZoneEs});
		});
	});
});


//FLOOR
// open localhost:9090/nusdcapi/devicecountfloor
// returns the time series of device count at floor level
router.get('/devicecountfloor', function(req, res) {

	devicedb.serialize(function() {
		var floorDeviceCountList = [];
		devicedb.all("Select rowid AS id, floorId, floorName, deviceCount, time, date FROM AggregateFloor", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				floorDeviceCountList.push({id: rows[i].id, locationId: rows[i].floorId, locationName: rows[i].floorName, deviceCount: rows[i].deviceCount, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({counts: floorDeviceCountList});
		});
	});
});


//ZBF

// open localhost:9090/nusdcapi/getallzones
// returns the the names of all the zones in NUS API
router.get('/getallzones', function(req, res) {
	zbfdb.serialize(function() {
		var zoneList = [];
		zbfdb.all("Select rowid AS id, zoneId, zoneName FROM Zone", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				zoneList.push({id: rows[i].id, locationId: rows[i].zoneId, locationName: rows[i].zoneName});
			}		
			
			res.json({zone_list: zoneList});
		});
	});
});

// open localhost:9090/nusdcapi/getallbuildings
// returns the the names of all the buildings in NUS API
router.get('/getallbuildings', function(req, res) {
	zbfdb.serialize(function() {
		var buildingList = [];
		zbfdb.all("Select rowid AS id, buildingId, buildingName, zoneId FROM Building", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				buildingList.push({id: rows[i].id, locationId: rows[i].buildingId, locationName: rows[i].buildingName, zoneId: rows[i].zoneId});
			}		
			
			res.json({building_list: buildingList});
		});
	});
});

// open localhost:9090/nusdcapi/getallfloors
// returns the the names of all the floors in NUS API
router.get('/getallfloors', function(req, res) {
	zbfdb.serialize(function() {
		var floorList = [];
		zbfdb.all("Select rowid AS id, floorId, floorName, buildingId FROM Floor", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				floorList.push({id: rows[i].id, locationId: rows[i].floorId, locationName: rows[i].floorName, buildingId: rows[i].buildingId});
			}		
			
			res.json({floor_list: floorList});
		});
	});
});





//FILES

// open localhost:9090/nusdcapi/dynamicchart
// access the dynamic chart page
router.get('/dynamicchart', function(req, res) {
    res.sendFile(path.join(__dirname + '/dynamicchart.html'));
});
// open localhost:9090/nusdcapi/heatmap
// access the heatmap page
router.get('/heatmap', function(req, res) {
    res.sendFile(path.join(__dirname + '/heatmap.html'));
});
// open localhost:9090/nusdcapi/heatmap
// to include the script of the dynamic chart
router.get('/dc_chart.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/dc_chart.js'));
})
// to access the code to a pie chart...not included in the project scope
router.get('/pie_chart.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/pie_chart.js'));
})
// open localhost:9090/nusdcapi/dynamicoptions.js
// to include the script that controls the location selector and forecasting method selector
router.get('/dynamicoptions.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/dynamicoptions.js'));
})
// open localhost:9090/nusdcapi/map.js
// to include the script that modifies the map
router.get('/map.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/map.js'));
})

// to load plugin of the heatmap
router.get('/gmaps.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/heatmap.js-master/plugins/gmaps-heatmap/gmaps-heatmap.js'));
})
// a necessary part of the heatmap
router.get('/heatmap.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/heatmap.js-master/build/heatmap.js'));
})
// a necessary part of the heatmap
router.get('/heatmap_engine.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/heatmap_engine.js'));
})

// contains the styles to the dynamic chart page
router.get('/chartpage.css', function(req, res) {
	res.sendFile(path.join(__dirname + '/css/chartpage.css'));
})


//Register Our Routes
//all of our routes will be prefixed with /api
app.use('/nusdcapi', router);

//Start the server
app.listen(port);
console.log('localhost is set at port ' + port);


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
router.get('/devicecountuni', function(req, res) {
	

	devicedb.serialize(function() {
		var uniDeviceCountList = [];
		devicedb.all("Select rowid AS id, uniId, uniName, deviceCount, time, date FROM AggregateUniversity", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				uniDeviceCountList.push({id: rows[i].id, locationId: rows[i].uniId, locationName: rows[i].uniName, deviceCount: rows[i].deviceCount, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({counts: uniDeviceCountList});
		});
	});
});

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



//BUILDING
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

//ZONE
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

//FLOOR
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

router.get('/getallfloors', function(req, res) {
	

	zbfdb.serialize(function() {
		var floorList = [];
		zbfdb.all("Select rowid AS id, floorId, floorName, buildingId FROM Floor", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				floorList.push({id: rows[i].id, locationId: rows[i].id, locationName: rows[i].floorName, buildingId: rows[i].buildingId});
			}		
			
			res.json({floor_list: floorList});
		});
	});
});





//FILES


router.get('/testchart', function(req, res) {
    res.sendFile(path.join(__dirname + '/testChart.html'));
});

router.get('/map', function(req, res) {
    res.sendFile(path.join(__dirname + '/map.html'));
});

router.get('/dc_chart.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/dc_chart.js'));
})

router.get('/pie_chart.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/pie_chart.js'));
})

router.get('/dynamicoptions.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/dynamicoptions.js'));
})

router.get('/chartupdate.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/chartupdate.js'));
})

router.get('/map.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/map.js'));
})

router.get('/gmaps.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/heatmap.js-master/plugins/gmaps-heatmap/gmaps-heatmap.js'));
})

router.get('/heatmap.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/heatmap.js-master/build/heatmap.js'));
})

router.get('/mapsample.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/mapsample.js'));
})


router.get('/chartpage.css', function(req, res) {
	res.sendFile(path.join(__dirname + '/css/chartpage.css'));
})


//Register Our Routes
//all of our routes will be prefixed with /api
app.use('/nusdcapi', router);

//Start the server
app.listen(port);
console.log('Magic happens on port ' + port);


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


router.get('/devicecountzone', function(req, res) {
	

	devicedb.serialize(function() {
		var zoneDeviceCountList = [];
		devicedb.all("Select rowid AS id, zoneId, zoneName, deviceCount, time, date FROM AggregateZone", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				zoneDeviceCountList.push({id: rows[i].id, zoneId: rows[i].zoneId, zoneName: rows[i].zoneName, deviceCount: rows[i].deviceCount, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({zone_counts: zoneDeviceCountList});
		});
	});
});

router.get('/devicecountbuilding', function(req, res) {
	

	devicedb.serialize(function() {
		var buildingDeviceCountList = [];
		devicedb.all("Select rowid AS id, buildingId, buildingName, deviceCount, time, date FROM AggregateBuilding", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				buildingDeviceCountList.push({id: rows[i].id, buildingId: rows[i].buildingId, buildingName: rows[i].buildingName, deviceCount: rows[i].deviceCount, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({building_counts: buildingDeviceCountList});
		});
	});
});

router.get('/devicecountuni', function(req, res) {
	

	devicedb.serialize(function() {
		var uniDeviceCountList = [];
		devicedb.all("Select rowid AS id, uniId, uniName, deviceCount, time FROM AggregateUniversity", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				uniDeviceCountList.push({id: rows[i].id, uniId: rows[i].uniId, uniName: rows[i].uniName, deviceCount: rows[i].deviceCount, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({uni_counts: uniDeviceCountList});
		});
	});
});


router.get('/forecastzonema3', function(req, res) {
	

	devicedb.serialize(function() {
		var forecastZoneMa3 = [];
		devicedb.all("Select rowid AS id, zoneId, zoneName, ma3, time, date FROM forecastzonema3", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				forecastZoneMa3.push({id: rows[i].id, zoneId: rows[i].zoneId, zoneName: rows[i].zoneName, ma3: rows[i].ma3, time: rows[i].time, date: rows[i].date});
			}		
			
			res.json({forecast_zonema3: forecastZoneMa3});
		});
	});
});



router.get('/getallbuildings', function(req, res) {
	

	zbfdb.serialize(function() {
		var buildingList = [];
		zbfdb.all("Select rowid AS id, buildingId, buildingName, zoneId FROM building", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				buildingList.push({id: rows[i].id, buildingId: rows[i].buildingId, buildingName: rows[i].buildingName, zoneId: rows[i].zoneId});
			}		
			
			res.json({building_list: buildingList});
		});
	});
});

router.get('/testchart', function(req, res) {
    res.sendFile(path.join(__dirname + '/testChart.html'));
});

router.get('/dc_chart.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/dc_chart.js'));
})

router.get('/test.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/test.js'));
})

//Register Our Routes
//all of our routes will be prefixed with /api
app.use('/nusdcapi', router);

//Start the server
app.listen(port);
console.log('Magic happens on port ' + port);


var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var file = "nusdc.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;	//set our port

var path = require('path');

//	ROUTES FOR OUR API
// ===============

var router = express.Router();

// test route to make sure everything is working

router.get('/devicecountzone', function(req, res) {
	

	db.serialize(function() {
		var zoneDeviceCountList = [];
		db.all("Select rowid AS id, zoneId, zoneName, deviceCount, time FROM AggregateZone", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				zoneDeviceCountList.push({id: rows[i].id, zoneId: rows[i].zoneId, zoneName: rows[i].zoneName, deviceCount: rows[i].deviceCount, time: rows[i].time});
			}		
			
			res.json({zone_counts: zoneDeviceCountList});
		});
	});
});

router.get('/devicecountbuilding', function(req, res) {
	

	db.serialize(function() {
		var buildingDeviceCountList = [];
		db.all("Select rowid AS id, buildingId, buildingName, deviceCount, time FROM AggregateBuilding", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				buildingDeviceCountList.push({id: rows[i].id, buildingId: rows[i].buildingId, buildingName: rows[i].buildingName, deviceCount: rows[i].deviceCount, time: rows[i].time});
			}		
			
			res.json({building_counts: buildingDeviceCountList});
		});
	});
});

router.get('/devicecountuni', function(req, res) {
	

	db.serialize(function() {
		var uniDeviceCountList = [];
		db.all("Select rowid AS id, uniId, uniName, deviceCount, time FROM AggregateUniversity", function(err, rows) {
			for (var i = 0; i < rows.length; i++) {
				uniDeviceCountList.push({id: rows[i].id, uniId: rows[i].uniId, uniName: rows[i].uniName, deviceCount: rows[i].deviceCount, time: rows[i].time});
			}		
			
			res.json({uni_counts: uniDeviceCountList});
		});
	});
});

router.get('/testchart', function(req, res) {
	console.log(__dirname);
    res.sendFile(path.join(__dirname + '/testChart.html'));
});

//Register Our Routes
//all of our routes will be prefixed with /api
app.use('/nusdcapi', router);

//Start the server
app.listen(port);
console.log('Magic happens on port ' + port);


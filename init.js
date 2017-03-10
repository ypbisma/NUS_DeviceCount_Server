var fs = require("fs");
var deviceCountDb = "nusdc.db";
var zbfListDb = "zonebuildingfloor.db"
var dcExist = fs.existsSync(deviceCountDb);
var listExist = fs.existsSync(zbfListDb);

console.log(dcExist);
console.log(listExist);

if(!dcExist){
	console.log("Creating deviceCountDb file.");
	fs.openSync(deviceCountDb, "w");
}

if(!listExist){
	console.log("Creating zbfListDb file.");
	fs.openSync(zbfListDb, "w");
}

var sqlite3 = require("sqlite3").verbose();
var deviceCountDbCreate = new sqlite3.Database(deviceCountDb);
var zbfListDbCreate = new sqlite3.Database(zbfListDb);


deviceCountDbCreate.serialize(function() {
	if(!dcExist){
		deviceCountDbCreate.run("CREATE TABLE DeviceCount (zone TEXT, building TEXT, floor TEXT, count TEXT, time TEXT, date TEXT)");	
		deviceCountDbCreate.run ("CREATE TABLE AggregateBuilding(buildingId TEXT, buildingName TEXT, deviceCount TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run ("CREATE TABLE AggregateZone(zoneId TEXT, zoneName TEXT, deviceCount TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run ("CREATE TABLE AggregateUniversity(uniId TEXT, uniName TEXT, deviceCount TEXT, time TEXT, date TEXT)");
		

		deviceCountDbCreate.run ("CREATE TABLE ForecastBuildingMa3(buildingId TEXT, buildingName TEXT, ma3 TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run("CREATE TABLE ForecastBuildingMa5(buildingId TEXT, buildingName TEXT, ma5 TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run("CREATE TABLE ForecastBuildingWa(buildingId TEXT, buildingName TEXT, wa TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run("CREATE TABLE ForecastBuildingEs(buildingId TEXT, buildingName TEXT, es TEXT, time TEXT, date TEXT)");
		

		deviceCountDbCreate.run ("CREATE TABLE ForecastZoneMa3(zoneId TEXT, zoneName TEXT, ma3 TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run("CREATE TABLE ForecastZoneMa5(zoneId TEXT, zoneName TEXT, ma5 TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run("CREATE TABLE ForecastZoneWa(zoneId TEXT, zoneName TEXT, wa TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run("CREATE TABLE ForecastZoneEs(zoneId TEXT, zoneName TEXT, es TEXT, time TEXT, date TEXT)");


		deviceCountDbCreate.run ("CREATE TABLE ForecastUniMa3(uniId TEXT, uniName TEXT, ma3 TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run("CREATE TABLE ForecastUniMa5(uniId TEXT, uniName TEXT, ma5 TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run("CREATE TABLE ForecastUniWa(uniId TEXT, uniName TEXT, wa TEXT, time TEXT, date TEXT)");
		deviceCountDbCreate.run("CREATE TABLE ForecastUniEs(uniId TEXT, uniName TEXT, es TEXT, time TEXT, date TEXT)");

	}
});

zbfListDbCreate.serialize(function() {
	if(!listExist){
		zbfListDbCreate.run("CREATE TABLE ZoneBuildingFloor (zone TEXT, building TEXT, floor TEXT)");
		zbfListDbCreate.run("CREATE TABLE Zone (zoneId TEXT, zoneName TEXT)");
		zbfListDbCreate.run("CREATE TABLE Building (buildingId TEXT, buildingName TEXT, zoneId TEXT)");
		zbfListDbCreate.run("CREATE TABLE Floor (floorId TEXT, floorName TEXT, buildingId TEXT)");
	}
});


deviceCountDbCreate.close();
zbfListDbCreate.close();

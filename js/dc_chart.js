$(function() {

	// dataPoints
	var dataPointsActual = [];
	var dataPointsForecast = [];
	var dataPointsActualArea = [];

	var chart = new CanvasJS.Chart("chartContainer",{
		animationEnabled: true,
		zoomEnabled: true,
		backgroundColor: "#3A3C4A",
		theme: "theme3",
		zoomType: "xy",
		title: {
			text: "Device Count - NUS",
			fontSize: "30",
			fontFamily: "verdana",
			fontColor: "#FCFCFB",
		},
		toolTip: {
			shared: false,
			backgroundColor: "#3A3C4A",
			fontFamily: "arial",
			fontColor: "#FCFCFB",
			contentFormatter: function(e){
				var content = " ";
				for (var i = 0; i < e.entries.length; i++) {
					content += e.entries[i].dataSeries.name + " " + "<strong>" + e.entries[i].dataPoint.y + "</strong>";
					content += "<br/>";
				}
				return content;
			}
		},
		axisX: {
			title: "time",
			titleFontFamily: "lucida sans",
			titleFontSize: 19,
			titleFontColor: "#F6F8F8",
			labelFontColor: "#F6F8F8",
			labelFontSize: 14,
			tickLength: 10,
			gridColor:"#5D6D7E",
			gridDashType: "dot",
			gridThickness: 2,
		},
		axisY:{	
			includeZero: false,
			titleFontFamily: "lucida sans",
			titleFontSize: 19,
			title: "device count",
			titleFontColor: "#F6F8F8",
			labelFontColor: "#F6F8F8",
			labelFontSize: 16,
			tickLength: 10,
			gridColor:"#5D6D7E",
			gridDashType: "dot",
			gridThickness: 2,
		}, 
		data: [{ 
			// dataSeries1
			type: "line",
			xValueType: "dateTime",
			showInLegend: true,
			name: "Actual",
			dataPoints: dataPointsActual,
			color: "#22E0F7",
			markerSize: 8,
			connectNullData:true,
			showInLegend: true,
		},
		{				
			// dataSeries2
			type: "line",
			xValueType: "dateTime",
			showInLegend: true,
			name: "Forecast" ,
			dataPoints: dataPointsForecast,
			color: "#EC7063",
			markerSize: 8,
			showInLegend: true,
		},
		{ 
			// dataSeries1
			type: "area",
			xValueType: "dateTime",
			showInLegend: true,
			name: "Actual - Area",
			dataPoints: dataPointsActualArea,
			color: "#22E0F7",
			markerSize: 8,
			visible: false,
			connectNullData:true,
			fillOpacity: .5,
		},
		{				
			type: "area",
			xValueType: "dateTime",
			showInLegend: true,
			name: "Forecast - Area" ,
			dataPoints: dataPointsForecast,
			color: "#EC7063",
			markerSize: 8,
			visible: false,
			connectNullData:true,
			fillOpacity: .5,
		}],
		legend:{
			fontSize: 16,
			fontFamily: "lucida sans",

			fontColor: "#FCFCFB",
			cursor:"pointer",
			itemclick : function(e) {
				if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				}
				else {
					e.dataSeries.visible = true;
				}
				chart.render();
			}
		}
	});


var apiLinkActual;
var apiLinkForecast;
var updateInterval = 180000;
	// initial value
	var yValue1 = 640; 
	var yValue2 = 604;

	var latestTime = new Date;
	latestTime.setHours(0,0,0,0);


	var updateActual = function () {
		var arrActual = []
		var locationId;
		chart.options.data[1].visible = true;

		if($("#zone_option").val() == '0'){
			apiLinkActual = "http://localhost:9090/nusdcapi/devicecountuni";
			locationId = '1';
		} else{
			if($("#building_option").val() == '0'){
				apiLinkActual = "http://localhost:9090/nusdcapi/devicecountzone";
				locationId = $("#zone_option").val();
			} else{
				if($("#floor_option").val() == '0'){
					apiLinkActual = "http://localhost:9090/nusdcapi/devicecountbuilding";	
					locationId = $("#building_option").val();	
				} else{
					apiLinkActual = "http://localhost:9090/nusdcapi/devicecountfloor";	
					locationId = $("#floor_option").val();
					if($("#floor_option").val() != '0'){
						chart.options.data[1].visible = false;
					}
				}
				
			}
			
		}
		
		$.getJSON(apiLinkActual, function( data ) {
			chart.options.data[0].dataPoints = [];
			chart.options.data[2].dataPoints = [];

			arrActual = data["counts"];


			for (var i = 0; i < arrActual.length; i++) {
				var timeArr = arrActual[i].time.split(":");
				var dateArr = arrActual[i].date.split("-");

				var time = new Date;
				time.setHours(timeArr[0]);
				time.setMinutes(timeArr[1]);
				time.setSeconds(timeArr[2]);
				time.setDate(dateArr[0]);
				time.setMonth(dateArr[1]-1);
				time.setYear(dateArr[2]);
				// if(time > latestTime) {
					if(arrActual[i].locationId == locationId){
						console.log(locationId)
						chart.options.data[0].dataPoints.push({
						// dataPointsActual.push({
							x: time,
							y: parseFloat(arrActual[i].deviceCount)
						});
						chart.options.data[2].dataPoints.push({
							x: time,
							y: parseFloat(arrActual[i].deviceCount)
						});
					} // change push to element access
				// }

			};
			var timeArr = arrActual[arrActual.length - 1].time.split(":");
			latestTime = new Date;
			latestTime.setHours(timeArr[0]);
			latestTime.setMinutes(timeArr[1]);
			latestTime.setSeconds(timeArr[2]);
			// updating legend text with  updated with y Value 
			chart.options.data[0].legendText = " Actual";
			chart.options.data[1].legendText = " Forecast"; 

			chart.render();
		});
};

var updateForecast = function () {	
	var arrForecast = []
	var locationId;
	chart.options.data[1].visible = true;

	if($("#zone_option").val() == '0'){
		switch ($("input[name='method']:checked").val()) {
			case 'ma3':
			apiLinkForecast = "http://localhost:9090/nusdcapi/forecastunima3";
			break; 
			case 'ma5':
			apiLinkForecast = "http://localhost:9090/nusdcapi/forecastunima5";
			break; 
			case 'wa':
			apiLinkForecast = "http://localhost:9090/nusdcapi/forecastuniwa";
			case 'es':
			apiLinkForecast = "http://localhost:9090/nusdcapi/forecastunies";
			default: 
			apiLinkForecast = null;
		}
		locationId = '1';
	} else{
		if($("#building_option").val() == '0'){
			switch ($("input[name='method']:checked").val()) {
				case 'ma3':
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastzonema3";
				break; 
				case 'ma5':
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastzonema5";
				break; 
				case 'wa':
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastzonewa";
				case 'es':
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastzonees";
				default: 
				apiLinkForecast = null;
			}
			locationId = $("#zone_option").val();
		} else {
			switch ($("input[name='method']:checked").val()) {
				case 'ma3':
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastbuildingma3";
				break; 
				case 'ma5':
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastbuildingma5";
				break; 
				case 'wa':
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastbuildingwa";
				case 'es':
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastbuildinges";
				default: 
				apiLinkForecast = null;
			}
			locationId = $("#building_option").val();
		}
	}


	$.getJSON(apiLinkForecast, function( data ) {
		arrForecast = data["forecast"];
		chart.options.data[1].dataPoints = [];
		chart.options.data[3].dataPoints = [];



		for (var j = 0; j < arrForecast.length; j++) {
			var timeArr = arrForecast[j].time.split(":");
			var dateArr = arrForecast[j].date.split("-");
			var time = new Date;
			time.setHours(timeArr[0]);
			time.setMinutes(timeArr[1]);
			time.setSeconds(timeArr[2]);
			time.setDate(dateArr[0]);
			time.setMonth(dateArr[1]-1);
			time.setYear(dateArr[2]);

			time.setMinutes(time.getMinutes() + 5);
			if(arrForecast[j].forecast != '0.0') {
				if(arrForecast[j].locationId == locationId){
					chart.options.data[1].dataPoints.push({
						// dataPointsForecast.push({
							x: time,
							y: parseFloat(arrForecast[j].forecast)
						});
					chart.options.data[3].dataPoints.push({
						// dataPointsForecast.push({
							x: time,
							y: parseFloat(arrForecast[j].forecast)
						});
				}
			};
		};


		var timeArr = arrForecast[arrForecast.length - 1].time.split(":");
		latestTime = new Date;
		latestTime.setHours(timeArr[0]);
		latestTime.setMinutes(timeArr[1]);
		latestTime.setSeconds(timeArr[2]);


			// updating legend text with  updated with y Value 
			chart.options.data[0].legendText = " Actual";
			chart.options.data[1].legendText = " Forecast"; 

			chart.render();

		});

};

$("#zone_option").on("change", function() {
	updateActual();	
	updateForecast();
});

$("#building_option").on("change", function() {
	updateActual();	
	updateForecast();
});

$("#floor_option").on("change", function() {
	updateActual();	
	updateForecast();
	if($("#floor_option").val()!=0){
		chart.options.data[1].visible = false;	
	}
});

$(document).on("change","input[type=radio]",function(){
	updateActual();	
	updateForecast();
});


	// update chart after specified interval 
	setInterval(function(){updateActual()}, updateInterval);
	setInterval(function(){updateForecast()}, updateInterval);

	// generates first set of dataPoints 
	updateActual();	
	updateForecast();

});



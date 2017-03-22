$(function() {

	// dataPoints
	var dataPoints1 = [];
	var dataPoints2 = [];

	var chart = new CanvasJS.Chart("chartContainer",{
		zoomEnabled: true,
		title: {
			text: "Device Count - NUS"
		},
		toolTip: {
			shared: true
			
		},
		legend: {
			verticalAlign: "top",
			horizontalAlign: "center",
			fontSize: 14,
			fontWeight: "bold",
			fontFamily: "arial",
			fontColor: "dimGrey"
		},
		axisX: {
			title: "chart updates every 10 minutes",
			titleFontFamily: "arial",
			titleFontSize: 14
		},
		axisY:{	
			includeZero: false,
			titleFontFamily: "arial",
			// minimum: 1500,
		}, 
		data: [{ 
			// dataSeries1
			type: "line",
			xValueType: "dateTime",
			showInLegend: true,
			name: "Device Count",
			dataPoints: dataPoints1
		},
		{				
			// dataSeries2
			type: "line",
			xValueType: "dateTime",
			showInLegend: true,
			name: "Forecast" ,
			dataPoints: dataPoints2
		}],
		legend:{
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
				}
				
			}
			
		}
		
		$.getJSON(apiLinkActual, function( data ) {
			chart.options.data[0].dataPoints = [];

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
						// dataPoints1.push({
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
			chart.options.data[0].legendText = " Device Count NUS";
			chart.options.data[1].legendText = " Forecast"; 

			chart.render();
		});
};

var updateForecast = function () {	
	var arrForecast = []
	var locationId;

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
			apiLinkForecast = "http://localhost:9090/nusdcapi/forecastunima3";
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
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastzonema3";
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
				apiLinkForecast = "http://localhost:9090/nusdcapi/forecastbuildingma3";
			}
			locationId = $("#building_option").val();
		}
	}


	$.getJSON(apiLinkForecast, function( data ) {
		arrForecast = data["forecast"];
		chart.options.data[1].dataPoints = [];


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
						// dataPoints2.push({
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
			chart.options.data[0].legendText = " Device Count NUS";
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



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


var apiLink
	var updateInterval = 5000;//3 minutes
	// initial value
	var yValue1 = 640; 
	var yValue2 = 604;

	var latestTime = new Date;
	latestTime.setHours(0,0,0,0);


	var updateActual = function (locationId) {
		var arrActual = []
		if(locationId == '0'){
			apiLinkActual = "http://localhost:9090/nusdcapi/devicecountuni";
			locationId = '1';
		} else{
			apiLinkActual = "http://localhost:9090/nusdcapi/devicecountzone";
		}
		
		apiLinkForecast = "http://localhost:9090/nusdcapi/forecastzonema3"

		$.getJSON(apiLinkActual, function( data ) {
			console.log("Data:"); 
			console.log(data);
			console.log(chart.options.data[0].dataPoints);
			chart.options.data[0].dataPoints = [];

			arrActual = data["counts"];
			for (var i = 0; i < arrActual.length; i++) {
				
				var timeArr = arrActual[i].time.split(":");
				var time = new Date;
				time.setHours(timeArr[0]);
				time.setMinutes(timeArr[1]);
				time.setSeconds(timeArr[2]);

				// if(time > latestTime) {
					if(arrActual[i].locationId == locationId){
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

var updateForecast = function (locationId) {	
	var arrForecast = []
	if(locationId == '0'){
		switch (new Date().getDay()) {
			case 6:
			text = "Today is Saturday";
			break; 
			case 0:
			text = "Today is Sunday";
			break; 
			default: 
			text = "Looking forward to the Weekend";
		}
		apiLinkForecast = "http://localhost:9090/nusdcapi/forecastunima3";
		locationId = '1';
	} else{
		var methodRadio = document.forms[0].elements["method"];
		for(var i = 0; i < methodRadio.length; i++)
		{
			if(methodRadio[i].checked){
				console.log(methodRadio[i].value);
			}
		}
		apiLinkForecast = "http://localhost:9090/nusdcapi/forecastzonema3";
	}

	$.getJSON(apiLinkForecast, function( data ) {
		arrForecast = data["forecast"];
		chart.options.data[1].dataPoints = [];


		for (var j = 0; j < arrForecast.length; j++) {
			var timeArr = arrForecast[j].time.split(":");
			var time = new Date;
			time.setHours(timeArr[0]);
			time.setMinutes(timeArr[1]);
			time.setSeconds(timeArr[2]);
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

	// generates first set of dataPoints 

	$("#zone_option").on("change", function() {
		updateActual($("#zone_option").val());	
		updateForecast($("#zone_option").val());
	});

	// update chart after specified interval 
	setInterval(function(){updateActual($("#zone_option").val())}, updateInterval);
	setInterval(function(){updateForecast($("#zone_option").val())}, updateInterval);
});


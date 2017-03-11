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
	var updateInterval = 180000;//3 minutes
	// initial value
	var yValue1 = 640; 
	var yValue2 = 604;

	var latestTime = new Date;
	latestTime.setHours(0,0,0,0);

	
	apiLinkActual = "http://localhost:9090/nusdcapi/devicecountuni"
	apiLinkForecast = "http://localhost:9090/nusdcapi/forecastunima3"


	var updateChart = function () {
		var arrActual = []

		$.getJSON(apiLinkActual, function( data ) {
			arrActual = data["counts"];


			// count is number of times loop runs to generate random dataPoints. 

			for (var i = 0; i < arrActual.length; i++) {
				
				var timeArr = arrActual[i].time.split(":");
				var time = new Date;
				time.setHours(timeArr[0]);
				time.setMinutes(timeArr[1]);
				time.setSeconds(timeArr[2]);

				if(time > latestTime) {
					// if(arrActual[i].zoneId == "1"){
						dataPoints1.push({
							x: time,
							y: parseFloat(arrActual[i].deviceCount)
						});
					// }
				}

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

	var updateChart2 = function () {	
		var arrForecast = []
		$.getJSON(apiLinkForecast, function( data ) {
		  	arrForecast = data["forecast"];

		  	for (var j = 0; j < arrForecast.length; j++) {
		  		var timeArr = arrForecast[j].time.split(":");
				var time = new Date;
				time.setHours(timeArr[0]);
				time.setMinutes(timeArr[1]);
				time.setSeconds(timeArr[2]);
				time.setMinutes(time.getMinutes() + 5);
				if(arrForecast[j].forecast != '0.0') {
					dataPoints2.push({
						x: time,
						y: parseFloat(arrForecast[j].forecast)
					});
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
		// });
	
		});
	};

	// generates first set of dataPoints 
	updateChart();	
	updateChart2();
	 
	// update chart after specified interval 
	setInterval(function(){updateChart()}, updateInterval);
});


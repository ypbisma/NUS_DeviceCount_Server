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
			fontFamily: "calibri",
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
			minimum: 1000,
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
			name: "Company B" ,
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

	
	apiLink = "http://localhost:9090/nusdcapi/devicecountuni"
	


	var updateChart = function () {
		var arr = []
		$.getJSON(apiLink, function( data ) {
			arr = data["uni_counts"];

			// count is number of times loop runs to generate random dataPoints. 

			for (var i = 0; i < arr.length; i++) {
				

				console.log(arr);
				console.log(arr[i].time.split(":"));
				var timeArr = arr[i].time.split(":");
				var time = new Date;
				time.setHours(timeArr[0]);
				time.setMinutes(timeArr[1]);
				time.setSeconds(timeArr[2]);

				console.log(time);
				if(time > latestTime) {
					dataPoints1.push({
						x: time,
						y: parseFloat(arr[i].deviceCount)
					});
				}

				// dataPoints2.push({
				// 	x: time.getTime(),
				// 	y: parseFloat(arr[i].deviceCount)
				// });


			};
			var timeArr = arr[arr.length - 1].time.split(":");
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
	updateChart();	
	 
	// update chart after specified interval 
	setInterval(function(){updateChart()}, updateInterval);
});


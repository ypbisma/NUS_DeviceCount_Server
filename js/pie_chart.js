$(function() {
	var dps = [
		{label: "Management Wing", y: 125}	,
		{label: "Production Lab", y: 332},
		{label: "Cafeteria", y: 55},
		{label: "Library", y: 46},
		{label: "Recreation Centre", y: 32}
		];
		var totalEmployees = "total people on campus: 590";

		var chart = new CanvasJS.Chart("pieChartContainer",{
			theme: "theme2",
			title:{ 
				text: "People On Campus"
			},
			axisY: {				
				title: "Number of People"
			},					
			legend:{
				verticalAlign: "top",
				horizontalAlign: "centre",
				fontSize: 18

			},
			data : [{
				type: "column",
				showInLegend: true,
				legendMarkerType: "none",				
				legendText: totalEmployees,
				indexLabel: "{y}",
				dataPoints: dps
			}]
		});

		// renders initial chart
		chart.render();

		var sum = 590;	 //initial sum 

		var updateInterval = 1000;  // milliseconds

		var updateChart = function () {
			// Selecting a random dataPoint
			var dataPointIndex = Math.round(Math.random()*4);		

			// generating random value
			var deltaY = Math.round(2 + Math.random() *(-2-2));	

			// adding random value to random dataPoint
			dps[dataPointIndex].y = (dps[dataPointIndex].y + deltaY) > 0 ? dps[dataPointIndex].y + deltaY : 0 ;

			// updating legend text. 
			sum = sum + deltaY;
			totalEmployees = "total people on campus: " + sum;			
			chart.options.data[0].legendText = totalEmployees;	

			chart.render();

		};
			// update chart after specified interval
			setInterval(function(){updateChart()}, updateInterval);
});
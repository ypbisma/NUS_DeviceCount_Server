$(function() {
	apiLinkAllBuildings = "http://localhost:9090/nusdcapi/getallbuildings";
	apiLinkAllFloors = "http://localhost:9090/nusdcapi/getallfloors";
	apiLinkAllZones = "http://localhost:9090/nusdcapi/getallzones";
	var zoneChoice;
	document.getElementById("ma3check").checked = true;


	$.getJSON(apiLinkAllZones, function( data ) {
		arrZones = data["zone_list"];
		console.log(arrZones);
		$("#zone_option").html("");
		$("#zone_option").append("<option value='0'>All Zones</option>");
		for(var i = 0; i< arrZones.length;i++){
			$("#zone_option").append("<option value='"+(i+1)+"'>"+arrZones[i].locationName+"</option>");
		}
	});
	// });


$("#zone_option").on("change", function() {
	$.getJSON(apiLinkAllBuildings, function( data ) {
		arrBuildings = data["building_list"];
		document.getElementById("building_option").disabled = false;

		if(($("#zone_option").val()) == '0'){
			$("#building_option").html("");
			$("#building_option").append("<option value='-'>"+"-"+"</option>");
			$("#floor_option").html("");
			$("#floor_option").append("<option value='-'>"+"-"+"</option>");
			document.getElementById("building_option").disabled = true;
			document.getElementById("floor_option").disabled = true;
			zoneChoice = $("#zone_option").val();
		} else{
			$("#building_option").html("");
			$("#building_option").append("<option value='0'>"+"All Buildings"+"</option>");
			$("#floor_option").html("");
			$("#floor_option").append("<option value='-'>"+"-"+"</option>");
			document.getElementById("ma3check").disabled = false;
			document.getElementById("ma5check").disabled = false;
			document.getElementById("wa").disabled = false;
			document.getElementById("es").disabled = false;
			for (var i = 0; i < arrBuildings.length; i++) {
				if($("#zone_option").val() == arrBuildings[i].zoneId){
					$("#building_option").append("<option value="+arrBuildings[i].locationId+">"+arrBuildings[i].locationName+"</option>");
				}
			}
			zoneChoice = $("#zone_option").val();
		}

	});
});

$("#building_option").on("change", function() {
	$.getJSON(apiLinkAllFloors, function( data ) {
		arrFloors = data["floor_list"];
		document.getElementById("floor_option").disabled = false;

		document.getElementById("ma3check").disabled = false;
		document.getElementById("ma5check").disabled = false;
		document.getElementById("wa").disabled = false;
		document.getElementById("es").disabled = false;

		if(($("#building_option").val()) == '0'){
			$("#floor_option").html("");
			$("#floor_option").append("<option value='-'>"+"-"+"</option>");
			document.getElementById("floor_option").disabled = true;
		} else{
			$("#floor_option").html("");
			$("#floor_option").append("<option value='0'>"+"All Floors"+"</option>");
			for (var i = 0; i < arrFloors.length; i++) {
				if($("#building_option").val() == arrFloors[i].buildingId){
					$("#floor_option").append("<option value="+arrFloors[i].locationId+">"+arrFloors[i].locationName+"</option>");
				}
			}
		}

	});
});

$("#floor_option").on("change", function() {
	if(($("#floor_option").val()) == '0'){
		document.getElementById("ma3check").disabled = false;
		document.getElementById("ma5check").disabled = false;
		document.getElementById("wa").disabled = false;
		document.getElementById("es").disabled = false;
	} else{
		document.getElementById("ma3check").disabled = true;
		document.getElementById("ma5check").disabled = true;
		document.getElementById("wa").disabled = true;
		document.getElementById("es").disabled = true;
	}
});

});
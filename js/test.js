$(function() {

	$("#zone_option").html("");
	$("#zone_option").append("<option value='0'>All Zones</option>");
	$("#zone_option").append("<option value='1'>ENGADM</option>");
	$("#zone_option").append("<option value='2'>Computer Centre - Central Library</option>");
	$("#zone_option").append("<option value='3'>SDE - Engineering</option>");
	$("#zone_option").append("<option value='4'>Bizad - Law</option>");
	$("#zone_option").append("<option value='5'>Science - PGP</option>");
	$("#zone_option").append("<option value='6'>FASS</option>");
	$("#zone_option").append("<option value='7'>Medicine - NUH</option>");
	$("#zone_option").append("<option value='8'>Science - YIH</option>");
	$("#zone_option").append("<option value='9'>UTown</option>");

	apiLinkAllBuildings = "http://localhost:9090/nusdcapi/getallbuildings";


	$("#zone_option").on("change", function() {
		$.getJSON(apiLinkAllBuildings, function( data ) {
			arrBuildings = data["building_list"];

			if(($("#zone_option").val()) == '1'){

				alert($("#zone_option").val());
				$("#building_option").html("");
				$("#building_option").append("<option value='0'>"+"All Buildings"+"</option>");

				for (var i = 0; i < arrBuildings.length; i++) {
					if($("#zone_option").val() == arrBuildings[i].zoneId){
						$("#building_option").append("<option value="+arrBuildings[i].buildingId+">"+arrBuildings[i].buildingName+"</option>");
					}
				}
			}
			if(($("#zone_option").val()) == '2'){
				alert($("#zone_option").val());
				$("#building_option").html("");
				$("#building_option").append("<option value='0'>"+"All Buildings"+"</option>");

				for (var i = 0; i < arrBuildings.length; i++) {
					if($("#zone_option").val() == arrBuildings[i].zoneId){
						$("#building_option").append("<option value="+arrBuildings[i].buildingId+">"+arrBuildings[i].buildingName+"</option>");
					}
				}
			}
			if(($("#zone_option").val()) == '3'){
				alert($("#zone_option").val());
				$("#building_option").html("");
				$("#building_option").append("<option value='0'>"+"All Buildings"+"</option>");

				for (var i = 0; i < arrBuildings.length; i++) {
					if($("#zone_option").val() == arrBuildings[i].zoneId){
						$("#building_option").append("<option value="+arrBuildings[i].buildingId+">"+arrBuildings[i].buildingName+"</option>");
					}
				}
			}
			if(($("#zone_option").val()) == '4'){
				alert($("#zone_option").val());
				$("#building_option").html("");
				$("#building_option").append("<option value='0'>"+"All Buildings"+"</option>");

				for (var i = 0; i < arrBuildings.length; i++) {
					if($("#zone_option").val() == arrBuildings[i].zoneId){
						$("#building_option").append("<option value="+arrBuildings[i].buildingId+">"+arrBuildings[i].buildingName+"</option>");
					}
				}
			}
			if(($("#zone_option").val()) == '5'){
				alert($("#zone_option").val());
				$("#building_option").html("");
				$("#building_option").append("<option value='0'>"+"All Buildings"+"</option>");

				for (var i = 0; i < arrBuildings.length; i++) {
					if($("#zone_option").val() == arrBuildings[i].zoneId){
						$("#building_option").append("<option value="+arrBuildings[i].buildingId+">"+arrBuildings[i].buildingName+"</option>");
					}
				}
			}
			if(($("#zone_option").val()) == '6'){
				alert($("#zone_option").val());
				$("#building_option").html("");
				$("#building_option").append("<option value='0'>"+"All Buildings"+"</option>");

				for (var i = 0; i < arrBuildings.length; i++) {
					if($("#zone_option").val() == arrBuildings[i].zoneId){
						$("#building_option").append("<option value="+arrBuildings[i].buildingId+">"+arrBuildings[i].buildingName+"</option>");
					}
				}
			}
			if(($("#zone_option").val()) == '7'){
				alert($("#zone_option").val());
				$("#building_option").html("");
				$("#building_option").append("<option value='0'>"+"All Buildings"+"</option>");

				for (var i = 0; i < arrBuildings.length; i++) {
					if($("#zone_option").val() == arrBuildings[i].zoneId){
						$("#building_option").append("<option value="+arrBuildings[i].buildingId+">"+arrBuildings[i].buildingName+"</option>");
					}
				}
			}
			if(($("#zone_option").val()) == '8'){
				alert($("#zone_option").val());
				$("#building_option").html("");
				$("#building_option").append("<option value='0'>"+"All Buildings"+"</option>");

				for (var i = 0; i < arrBuildings.length; i++) {
					if($("#zone_option").val() == arrBuildings[i].zoneId){
						$("#building_option").append("<option value="+arrBuildings[i].buildingId+">"+arrBuildings[i].buildingName+"</option>");
					}
				}
			}
		});
	});
	
	$("#building_option").on("change", function() {
		$.getJSON(apiLinkAllBuildings, function( data ) {

		});
	});
});
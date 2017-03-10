$(function() {
	$("#zone_option").html("");
	$("#zone_option").append("<option value='1'>ENGADM</option>");
	$("#zone_option").append("<option value='2'>Computer Centre - Central Library</option>");
	$("#zone_option").append("<option value='3'>SDE - Engineering</option>");
	$("#zone_option").append("<option value='4'>Bizad - Law</option>");
	$("#zone_option").append("<option value='5'>Science - PGP</option>");
	$("#zone_option").append("<option value='6'>FASS</option>");
	$("#zone_option").append("<option value='7'>Medicine - NUH</option>");
	$("#zone_option").append("<option value='8'>Science - YIH</option>");
	$("#zone_option").append("<option value='6'>UTown</option>");

	$("#zone_option").on("change", function() {
		if(($("#zone_option").val()) == '1'){
			alert($("#zone_option").val());
			apiLink = "http://localhost:9090/nusdcapi/getallbuildings";

			$.getJSON(apiLink, function( data ) {
			arr = data["building_list"];
		// 	// for (var i = 0; i < arr.length; i++) {
		// 	// 	$("#building_option").append("<option value="+i+">"+arr[i]+"</option>");
		// }
		
		}
	});

});
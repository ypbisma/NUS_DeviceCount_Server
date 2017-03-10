$(function() {
	$("#faculty_option").html("");
	$("#faculty_option").append("<option value='computing'>Computing</option>");
	$("#faculty_option").append("<option value='nursing'>Nursing</option>");

	$("#faculty_option").on("change", function() {
		alert($("#faculty_option").val());
	});

});
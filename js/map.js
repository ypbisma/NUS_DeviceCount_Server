$(function() {

	var initMap = function() {
		var NUS = {lat: 37.782551, lng: -122.445368};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 17,
			center: NUS
		});

		var marker = new google.maps.Marker({
			position: NUS,
			map: map
		});
	};

	initMap();

});

angular.module('starter').factory('gpsLocationService', function ($http, POSTCARD_GPS_URL) {
	
	function getCurrentPosition() {
		if (navigator.geolocation) {
			return new Promise(
				(resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
			)
		} else {
			return new Promise(
				resolve => resolve({})
			)
		}
	}

	return {
		getCurrentPosition: function () {
			if (navigator.geolocation) {
				return new Promise(
					(resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
				)
			} else {
				return new Promise(
					resolve => resolve({})
				)
			}
		},

		uploadGpsLocation: function () {
			return getCurrentPosition().then(function (position) {
				return $http.get(POSTCARD_GPS_URL + position.coords.latitude + "," + position.coords.longitude)
			}).catch(
				// error => console.log(error);
				// Or
				error => {
					var msg = null;
					switch(error.code) {
						case error.PERMISSION_DENIED:
								msg = "User denied the request for Geolocation.";
								break;
						case error.POSITION_UNAVAILABLE:
								msg = "Location information is unavailable.";
								break;
						case error.TIMEOUT:
								msg = "The request to get user location timed out.";
								break;
						case error.UNKNOWN_ERROR:
								msg = "An unknown error occurred.";
								break;
					}
					console.log(msg);
					return msg;
				}
			);
		}
	}
});

angular.module('starter').controller('HomeController',
	function ($scope, $window, gpsLocationService) {
		
		$scope.activateToggle = { checked: false }

		$scope.activateGps = function () {
			if ($scope.activateToggle.checked) {
				gpsLocationService.uploadGpsLocation().then(function () {
					console.log("then");
				}).catch(function (error) {
					console.log("catch");
				});
			}
		};
	}
);

angular.module('starter').controller('HomeController',
	function ($scope, $window, gpsLocationService) {
		
		$scope.activateToggle = { checked: false }

		$scope.activateGps = function () {
			if ($scope.activateToggle.checked) {
				gpsLocationService.uploadGpsLocation();
			}
			console.log("asdasd" + $scope.activateToggle.checked);
		};
	}
);

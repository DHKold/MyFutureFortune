app.controller('AcheterAppartCtrl', ['$scope', function ($scope) {
	$scope.initFavorite('Acheter son appartement');
	$scope.finalResult = false;
	$scope.answer = function(b) {
		$scope.answered = true;
		$scope.ok = b;
	}
	
	$scope.compute = function() {
		$scope.finalResult = true;
	}
}]);

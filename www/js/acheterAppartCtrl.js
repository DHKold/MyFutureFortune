app.controller('AcheterAppartCtrl', ['$scope', function ($scope) {
	$scope.initFavorite('Acheter son appartement');
	
	$scope.answer = function(b) {
		$scope.answered = true;
		$scope.ok = b;
	}
}]);

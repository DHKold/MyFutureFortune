app.controller('AcheterAppartCtrl', ['$scope', function ($scope) {
	$scope.initPanel('Acheter son appartement', null);
	$scope.finalResult = false;
	$scope.first = true;
	$scope.answer = function(b) {
		$scope.answered = true;
		$scope.ok = b;
	}
	
	$scope.compute = function() {
		$scope.finalResult = true;
	}
	
	$scope.suivant = function() {
		$scope.first = false;
		$scope.initPanel('Acheter son appartement', 'plateau');
	};
}]);

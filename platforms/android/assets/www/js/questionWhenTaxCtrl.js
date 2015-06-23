app.controller('QuestionWhenTaxCtrl', ['$scope', 'FavoriteService', function ($scope, FavoriteService) {
	$scope.answered = false;
	$scope.ok = false;
	$scope.initFavorite('Quand payer ses taxes');

	$scope.answer = function(a) {
		if (a) {
			$scope.addPoint(100);
		}
		$scope.answered = true;
		$scope.ok = a;
	}
}]);

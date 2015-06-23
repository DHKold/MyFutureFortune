app.controller('QuestionWhenTaxCtrl', ['$scope', 'FavoriteService', function ($scope, FavoriteService) {
	$scope.answered = false;
	$scope.ok = false;
	//FavoriteService.initFavorite();
	$scope.initFavorite('Quand payer ses taxes');
	//FavoriteService.setToggleFavoriteButton('Quand payer ses taxes', '/questionWhenTax');

	$scope.answer = function(a) {
		if (a) {
			$scope.addPoint(100);
		}
		$scope.answered = true;
		$scope.ok = a;
	}
}]);

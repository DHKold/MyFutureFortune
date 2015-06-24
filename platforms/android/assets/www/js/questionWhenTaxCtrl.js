app.controller('QuestionWhenTaxCtrl', ['$scope', 'FavoriteService', function ($scope, FavoriteService) {
	$scope.answered = false;
	$scope.ok = false;
	$scope.initPanel('Quand payer ses taxes', null, false);

	$scope.answer = function(a) {
		if (a) {
			$scope.addPoint(100);
		}
		$scope.answered = true;
		$scope.ok = a;
		$scope.initPanel('Quand payer ses taxes', "aFaireImpot");
	}
}]);

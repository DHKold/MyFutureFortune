app.controller('QuestionWhenTaxCtrl', ['$scope', function ($scope) {
	$scope.answered = false;
	$scope.ok = false;
	
	$scope.answer = function(a) {
		if (a) {
			$scope.addPoint(100);
		}
		$scope.answered = true;
		$scope.ok = a;
	}
}]);

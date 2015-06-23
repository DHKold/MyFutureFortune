app.controller('ImmoCtrl', ['$scope', function ($scope) {
	//$scope.initFavorite('Salarié: Plan d\'épargne');
	
	var counter = 0;
	var size = 5;
	$scope.initPanel('Immobilier: quiz', null);
	
/*	$scope.screen0 = true;
	$scope.suivant = function() {
		counter++;
		if (counter == size - 1) {
			$scope.initPanel('Immobilier: quiz', "plateau");
		}
		for (var i = 0; i < size; i++) {
			$scope['screen' + i] = false;
		}
		$scope['screen' + counter] = true;
	};*/
	
	$scope.answer = function(i) {
		$scope.answered = true;
		$("button").blur();
		$scope.initPanel('Immobilier: quiz', "plateau");
	}
}]);

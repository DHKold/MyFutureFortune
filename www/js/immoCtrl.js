app.controller('ImmoCtrl', ['$scope', function ($scope) {
	//$scope.initFavorite('Salarié: Plan d\'épargne');
	
	var counter = 0;
	var size = 5;
	$scope.initPanel('Immobilier: quiz', null, true);
	
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
	
	$("#additional").hide();
	$scope.answer = function(i) {
			$("#additional").show();
			if (i == 2) {
			$scope.correct = true;
			$("#text").text("Correct!");
			$("#myModal").modal();
			setTimeout(function() {
				$("#myModal").modal('hide');
			}, 2000);
		} else {
			$scope.correct = false;
			$("#text").text("Faux! ");
			$("#myModal").modal();
			setTimeout(function() {
				$("#myModal").modal('hide');
			}, 2000);
		}

		$scope.answered = true;
		$("button").blur();
		$scope.initPanel('Immobilier: quiz', "plateau");
	}
}]);

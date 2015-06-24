app.controller('AcheterAppartCtrl', ['$scope', function ($scope) {
	$scope.initPanel('Acheter son appartement', null);
	$scope.finalResult = false;
	$scope.first = true;
	$scope.answer = function(b) {
		$scope.answered = true;
		$scope.ok = b;
	}
	
	$.notify({
		message: 'Vous avez déverrouillé le trophée des 3 premières questions résolues! <img src="img/Golden_Medal_64.png"style="max-height: 32px" />' 
	},{
		type: 'info',
		placement : {
			'from': 'bottom',
			'align': 'center'
		},
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		},
		delay: 1000,
		offset: 29
	});

	$scope.compute = function() {
		$scope.finalResult = true;
	}
	
	$scope.suivant = function() {
		$scope.first = false;
		$scope.initPanel('Acheter son appartement', 'plateau');
	};
}]);

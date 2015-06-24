app.controller('PEACtrl', ['$scope', function ($scope) {
	$scope.initPanel('PEA', "plateau", true);
	
	$scope.answer = function(i) {
		$scope.answered = true;
		$("button").blur();
		$scope.initPanel('PEA', "plateau", false);
		
		if (i == 2) {
			$scope.correct = true;
			$("#text").text("Correct!");
			$("#myModal").modal();
			setTimeout(function() {
				$("#myModal").modal('hide');
			}, 2000);
		} else {
			$scope.correct = false;
			$("#text").text("Faux! Il s'agit du plan d'épargne d'actions!");
			$("#myModal").modal();
			setTimeout(function() {
				$("#myModal").modal('hide');
			}, 2000);
		}
	}

}]);

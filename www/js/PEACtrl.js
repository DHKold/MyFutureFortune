app.controller('PEACtrl', ['$scope', function ($scope) {
	$scope.initPanel('PEA', "plateau", true);
	
	$scope.answer = function(i) {
		$scope.answered = true;
		$("button").blur();
		$scope.initPanel('PEA', "plateau", false);
	}

}]);

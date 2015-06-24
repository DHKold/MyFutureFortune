app.controller('TrophyCtrl', ['$scope', function ($scope) {
	$scope.initPanel(null, "plateau");
	$scope.showTrophy = function(i) {
		$("#myModal").modal();
	};
}]);

app.controller('TrophyCtrl', ['$scope', function ($scope) {
	$scope.initFavorite('Salarié: Plan d\'épargne');
	$scope.showTrophy = function(i) {
		$("#myModal").modal();
	};
}]);

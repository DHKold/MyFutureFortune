app.controller('PanelCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.points = 0;
	$rootScope.favorites = [];
	$scope.favoriteOff = false;
	
	$scope.addPoint = function(points) {
		$scope.points += points;
	}
	
	$scope.toggleFavorite = function() {
		$scope.favoriteOff = !$scope.favoriteOff;
	}
}]);

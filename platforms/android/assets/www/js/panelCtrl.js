app.controller('PanelCtrl', ['$scope', '$rootScope', 'FavoriteService', '$location', function ($scope, $rootScope, FavoriteService, $location) {
	$scope.points = 0;
	$rootScope.showFavorite = true;

	var title;
	var path;

	$scope.initFavorite = function(t) {
		title = t;
		path = $location.path();
		var favorites = FavoriteService.getFavorites();
		var item = favorites[path];
		$scope.favoriteOff = !angular.isDefined(item);
	}
	
	$scope.addPoint = function(points) {
		$scope.points += points;
	}

	$scope.toggleFavorite = function() {
		$scope.favoriteOff = !$scope.favoriteOff;
		FavoriteService.toggleFavorite(title, path);
	}

	$scope.myFavorites = function() {
		$location.path('/myFavorites');
	}
	
	$scope.backToGame = function() {
		$location.path('plateau');
	}
}]);

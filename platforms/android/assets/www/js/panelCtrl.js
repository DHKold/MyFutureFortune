app.controller('PanelCtrl', ['$scope', '$rootScope', 'FavoriteService', '$location', function ($scope, $rootScope, FavoriteService, $location) {
	$scope.points = 0;
	$rootScope.showFavorite = true;
	$rootScope.nextEnabled = true;

	var title;
	var path;
	var next;

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
	
	$scope.next = function() {
		$location.path("plateau");
	}
	
	$scope.initPanel = function(title, nextPath) {
		$scope.initFavorite(title);
		$scope.showFavorite = title != null;
		next = nextPath;
		$rootScope.nextEnabled = nextPath != null;
	};
}]);

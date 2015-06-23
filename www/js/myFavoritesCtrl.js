app.controller('MyFavoritesCtrl', ['$scope', '$rootScope', 'FavoriteService', '$location', function ($scope, $rootScope, FavoriteService, $location) {
	$scope.favorites = FavoriteService.getFavorites();
	$rootScope.showFavorite = false;

	$scope.go = function(path) {
		$rootScope.showFavorite = true;
		$location.path(path);
	};
}]);

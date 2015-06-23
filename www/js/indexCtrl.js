app.controller('IndexCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$rootScope.showFavorite = false;
	$scope.initPanel(null, "categoryAge");
}]);

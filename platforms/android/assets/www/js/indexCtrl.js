app.controller('IndexCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	$rootScope.showFavorite = false;
	$scope.initPanel(null, null);
	
	$scope.suivant = function() {
		$location.path('categoryAge');
	}
}]);

app.controller('CategoryAgeCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	$rootScope.showFavorite = false;
	$scope.initPanel(null, null);

	$scope.selectCategoryAge = function() {
		$location.path('plateau');
	};
}]);

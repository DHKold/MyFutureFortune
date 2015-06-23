app.controller('CategoryAgeCtrl', ['$scope', '$location', function ($scope, $location) {
	$rootScope.showFavorite = false;

	$scope.selectCategoryAge = function() {
		$location.path('plateau');
	};
}]);

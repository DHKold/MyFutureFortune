app.controller('CategoryAgeCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	$rootScope.showFavorite = false;
	$scope.initPanel(null, null);

	$scope.selectCategoryAge = function() {
		$("#myModal").modal();
	};
	
	$scope.suivant = function() {
		$location.path('plateau');
	}
}]);

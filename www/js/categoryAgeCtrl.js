app.controller('CategoryAgeCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	$rootScope.showFavorite = false;

	$scope.selectCategoryAge = function() {
		$location.path('questionWhenTax');
	};
}]);

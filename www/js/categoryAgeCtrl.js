app.controller('CategoryAgeCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.selectCategoryAge = function() {
		$location.path('plateau');
	};
}]);

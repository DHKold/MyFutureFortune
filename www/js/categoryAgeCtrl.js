app.controller('CategoryAgeCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	$rootScope.showFavorite = false;
	$scope.initPanel(null, null);

	$scope.selectCategoryAge = function() {
		$("#myModal").modal();
	};
	
	$scope.suivant = function() {
		$("#myModal").modal('hide');
		$('#myModal').on('hidden.bs.modal', function (e) {
			$scope.$apply(function() {
				$location.path('plateau');
			});
		});
	}
}]);

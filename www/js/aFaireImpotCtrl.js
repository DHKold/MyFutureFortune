app.controller('AFaireImpotCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$rootScope.showFavorite = false;
	$scope.initPanel("A faire impot", "categoryAge", false);
}]);

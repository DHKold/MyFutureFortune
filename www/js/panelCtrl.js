app.controller('PanelCtrl', ['$scope', '$rootScope', 'FavoriteService', '$location', 'ScenarioSvc', 'GameSvc', '$timeout', function ($scope, $rootScope, FavoriteService, $location, ScenarioSvc, GameSvc, $timeout) {
	$scope.points = 0;
	$rootScope.showFavorite = true;
	$rootScope.nextEnabled = true;

	var title;
	var path;
	var next;
	var multiplayer = false;

	$scope.initFavorite = function(t) {
		title = t;
		path = $location.path();
		var favorites = FavoriteService.getFavorites();
		var item = favorites[path];
		$scope.favoriteOff = !angular.isDefined(item);
	}
	
	$scope.addPoint = function(points) {
		$scope.points += points;
	}

	$scope.toggleFavorite = function() {
		$scope.favoriteOff = !$scope.favoriteOff;
		FavoriteService.toggleFavorite(title, path);
	}

	$scope.myFavorites = function() {
		$location.path('/myFavorites');
	}
	
	$scope.backToGame = function() {
		$location.path('plateau');
	}
	
	$scope.next = function() {
		$location.path("plateau");
	}
	// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

  }
	$scope.initPanel = function(title, nextPath, multiplayer) {
		$scope.initFavorite(title);
		$scope.showFavorite = title != null;
		next = nextPath;
		$rootScope.nextEnabled = nextPath != null;
		multi = multiplayer;
		if (multi) {
			var t = ["LeGrandJojo", "Cedric", "Master", "grrr"];
			var i = getRandomInt(0, t.length);
			setTimeout(function() {
				$.notify({
					message: t[i] + ' est le premier a avoir trouvé la réponse' 
				},{
					type: 'info',
					placement : {
						'from': 'bottom',
						'align': 'center'
					},
					animate: {
						enter: 'animated fadeInDown',
						exit: 'animated fadeOutUp'
					},
					delay: 1000,
					offset: 29
				});
			}, 1000);
		}
		
	};
	
	$scope.trophy = function() {
		$location.path("/trophy");
	};
	
	$scope.reset = function() {
		$location.path("plateau");
		$timeout(function() {
			ScenarioSvc.init();
			GameSvc.start();
			GameSvc.forceValue = ScenarioSvc.getNextDice();
		}, 500);
	}
}]);

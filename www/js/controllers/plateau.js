Tile = function(id, options){
	// Init
	this.id = id;
	
	// Options
	options = options || {};
	this.action = options.action;

	return this;
};

app.controller('PlateauCtrl', function($rootScope, $scope, GameSvc, $location, ScenarioSvc){
	// Dummy
	function resolved(){
		var def = new $.Deferred();
		def.resolve();
		return def.promise();
	}
	
	function chainToScreenAction(screen){
		return function(){
			$rootScope.$apply(function() {
				$location.path('/'+screen);
			});
		};
	}
	
	// Scenario
	function scenarioAction(){
		var screen = ScenarioSvc.nextAction();
		if (screen){
			$rootScope.$apply(function() {
			console.log(screen);
				$location.path('/'+screen);
			});
		}
		return resolved();
	}
	
	// Initialize Panel
	$scope.initPanel(null, null);
	
	// Init tiles
	if (!GameSvc.hasBeenLoaded){
		ScenarioSvc.init();
	
		for (var i = 2; i<=42; ++i){
			GameSvc.setTile(i, { action: scenarioAction });
		}

		GameSvc.setTile(42, { action: function(){ alert('Bravo, vous avez gagné!'); return resolved(); } });
		
		GameSvc.start();
		
		GameSvc.hasBeenLoaded = true;
	}
	
	// Restore Game
	else{
		GameSvc.restore();
	}
	
	$scope.Game = GameSvc;
});
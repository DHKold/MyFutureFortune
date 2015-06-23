Tile = function(id, options){
	// Init
	this.id = id;
	
	// Options
	options = options || {};
	this.action = options.action;

	return this;
};

app.controller('PlateauCtrl', function($rootScope, $scope, GameSvc, $location){
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
	
	$scope.initPanel(null, null);
	
	// Init tiles
	if (!GameSvc.hasBeenLoaded){
		GameSvc.setTile(2, { action: chainToScreenAction('questionWhenTax') });
		GameSvc.setTile(3, { action: chainToScreenAction('aFaireImpot') });
		GameSvc.setTile(4, { action: chainToScreenAction('acheterAppart') });
		GameSvc.setTile(5, { action: chainToScreenAction('aimePeche') });
		GameSvc.setTile(6, { action: chainToScreenAction('cinema') });
		GameSvc.setTile(7, { action: chainToScreenAction('index') });
		GameSvc.setTile(8, { action: chainToScreenAction('index') });
		GameSvc.setTile(9, { action: chainToScreenAction('index') });
		GameSvc.setTile(10, { action: chainToScreenAction('index') });
		GameSvc.setTile(11, { action: chainToScreenAction('index') });
		GameSvc.setTile(12, { action: chainToScreenAction('index') });
		GameSvc.setTile(13, { action: chainToScreenAction('index') });
		GameSvc.setTile(14, { action: chainToScreenAction('index') });
		GameSvc.setTile(15, { action: chainToScreenAction('index') });
		GameSvc.setTile(16, { action: chainToScreenAction('index') });
		GameSvc.setTile(17, { action: chainToScreenAction('index') });
		GameSvc.setTile(18, { action: chainToScreenAction('index') });
		GameSvc.setTile(19, { action: chainToScreenAction('index') });
		GameSvc.setTile(20, { action: chainToScreenAction('index') });
		GameSvc.setTile(21, { action: chainToScreenAction('index') });
		GameSvc.setTile(22, { action: chainToScreenAction('index') });
		GameSvc.setTile(23, { action: chainToScreenAction('index') });
		GameSvc.setTile(24, { action: chainToScreenAction('index') });
		GameSvc.setTile(25, { action: chainToScreenAction('index') });
		GameSvc.setTile(26, { action: chainToScreenAction('index') });
		GameSvc.setTile(27, { action: chainToScreenAction('index') });
		GameSvc.setTile(28, { action: chainToScreenAction('index') });
		GameSvc.setTile(29, { action: chainToScreenAction('index') });
		GameSvc.setTile(30, { action: chainToScreenAction('index') });
		GameSvc.setTile(31, { action: chainToScreenAction('index') });
		GameSvc.setTile(32, { action: chainToScreenAction('index') });
		GameSvc.setTile(33, { action: chainToScreenAction('index') });
		GameSvc.setTile(34, { action: chainToScreenAction('index') });
		GameSvc.setTile(35, { action: chainToScreenAction('index') });
		GameSvc.setTile(36, { action: chainToScreenAction('index') });
		GameSvc.setTile(37, { action: chainToScreenAction('index') });
		GameSvc.setTile(38, { action: chainToScreenAction('index') });
		GameSvc.setTile(39, { action: chainToScreenAction('index') });
		GameSvc.setTile(40, { action: chainToScreenAction('index') });
		GameSvc.setTile(41, { action: chainToScreenAction('index') });
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
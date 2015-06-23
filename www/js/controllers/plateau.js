Tile = function(id, options){
	// Init
	this.id = id;
	
	// Options
	options = options || {};
	this.action = options.action;

	return this;
};

app.controller('PlateauCtrl', function($scope, GameSvc){
	$scope.initPanel(null, null);
	// Dummy
	function resolved(){
		var def = new $.Deferred();
		def.resolve();
		return def.promise();
	}
	
	// Init tiles
	if (!GameSvc.hasBeenLoaded){
		GameSvc.setTile(2, { action: function(){ alert('2'); return resolved(); } });
		GameSvc.setTile(3, { action: function(){ alert('3'); return resolved(); } });
		GameSvc.setTile(4, { action: function(){ alert('4'); return resolved(); } });
		GameSvc.setTile(5, { action: function(){ alert('5'); return resolved(); } });
		GameSvc.setTile(6, { action: function(){ alert('6'); return resolved(); } });
		
		GameSvc.start();
		
		GameSvc.hasBeenLoaded = true;
	}
	
	// Restore Game
	else{
		GameSvc.restore();
	}
	
	$scope.Game = GameSvc;
});
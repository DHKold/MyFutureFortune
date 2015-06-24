$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};

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
	
	// Open a card
	$scope.openCard = function(image, title){
		// Promise
		var def = new $.Deferred();
		GameSvc.playSound('card');
		
		// No content
		if (!image && !title){
			def.resolve();
			return def.promise();
		}
		
		// Prepare animation
		$('.view-animate').addClass('card-animate');
	
		// Animate
		var elem = $('#game-card');
		elem.html(title);
		elem.show();
		elem.css({ left:'50%', top:'50%', width:0, height:0, backgroundImage:"url('img/tiles/"+image+".png')" });
		elem.animate({ left:'0', top:'0', width:'100%', height:'100%' }, { complete : function(){ 
			window.setTimeout(function(){ def.resolve(); }, 2000);
		} });
		
		return def.promise();
	};
	
	// Scenario
	function scenarioAction(){
		var action = ScenarioSvc.nextAction();
		if (action && action.screen){
			$scope.openCard(action.image, action.title).then(function(){
				$rootScope.$apply(function() {
					$location.path('/'+action.screen);
				});
			});
		}
		GameSvc.forceValue = ScenarioSvc.getNextDice();
		return resolved();
	}
	
	// Initialize Panel
	$scope.initPanel(null, null);
	GameSvc.forceValue = GameSvc.forceValue || false;
	
	// Init tiles
	if (!GameSvc.hasBeenLoaded){
		ScenarioSvc.init();
		GameSvc.forceValue = ScenarioSvc.getNextDice();
	
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
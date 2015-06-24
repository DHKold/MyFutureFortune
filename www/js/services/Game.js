app.service('GameSvc', function(){
	var Game = {
		// Properties
		progress		: 1,
		piece			: $('<div class="game-piece" id="piece"></div>'),
		dice			: null,
		tiles			: [],
		score			: 0,
		
		sounds_enabled	: true,
		
		cache_sounds	: {},
		
		// Set a tile
		setTile : function(id, options){
			this.tiles[id] = new Tile(id, options);
		},
		
		// Start
		start : function(){
			// Player on tile 1
			this.putPieceOnTile(1);
			
			// Enable the diceroll
			$('#dicewait').show();
		},
		
		restore : function(){
			// Player on tile
			this.putPieceOnTile(this.progress);
			
			// Enable the diceroll
			$('#dicewait').show();
		},
		
		// Play a sound
		playSound : function(sound){
			// Muted
			if (!this.sounds_enabled) return;
			
			// Load sound
			if (document.location.protocol == "file:") {
				document.addEventListener("deviceready", function() {
					 var my_media = new Media('file:///android_asset/www/sounds/'+sound+'.wav');
					 my_media.play();
				});
			}else {
				if (!this.cache_sounds[sound]) this.cache_sounds[sound] = new Audio('sounds/'+sound+'.wav');
				this.cache_sounds[sound].play();
			}
		},
		
		// Put the piece on a tile
		putPieceOnTile : function(tileId, animate, follow){
			// Get the tile
			var piece = $('#piece');
			
			// Compute position
			function getTilePosition(tileId){
				var tile = $('#tile'+tileId);
				var position = tile.position();
				var left = position.left + (tile.width()-piece.width())/2;
				var top = position.top + (tile.height()-piece.height())/2;
				return { left: left+'px', top: top+'px' };
			}
			
			// Handlers
			var def = new $.Deferred();
			var Game = this;
			
			function hPlaySound(){
				if (animate) Game.playSound('pawn');
			}
			
			function hMoveDone(){
				if (animate) Game.playSound('pawn');
				window.setTimeout(function(){
					def.resolve(tileId);
				}, 1000);
			}
			
			// Move the pawn
			if (animate){
				if (follow){
					for (var i = this.progress+1; i<tileId; ++i){
						var props = getTilePosition(i);
						piece.animate(props, { complete : hPlaySound });
					}
				}
				var props = getTilePosition(tileId);
				piece.animate(props, { complete : hMoveDone });
			} else {
				var props = getTilePosition(tileId);
				piece.css(props);
				window.setTimeout(hMoveDone, 1);
			}
			
			this.progress = tileId;
			
			return def.promise();
		},
		
		// Roll the dice
		rollDice : function(forceValue){
			// Init
			Game.playSound('dice');
			var def = $.Deferred();
			var dice = $('#dice');
			
			function randomDice(forceValue){
				var diceValue = forceValue || Math.floor(Math.random() * 6 + 1);
				dice.css('backgroundPosition',((diceValue-1) * 20)+'% 0');
				return diceValue;
			}
			
			// Hide helper
			$('#dicewait').hide();
			
			// Dice Animation
			var maxMargin = $('.diceroll').innerWidth() - dice.width() - 5;
			dice.animate({ marginRight : maxMargin+'px'}, 1250).animate({ marginRight : '5px' }, 1250);
			
			// Roll
			var MaxRolls = 11;
			var rolling = window.setInterval(function(){
				randomDice();
				if (MaxRolls-- <= 0){
					var lastRoll = randomDice(forceValue);
					window.clearInterval(rolling);
					def.resolve(lastRoll);
				}
			}, 200);
			
			// Promise
			return def.promise();
		},
		
		// Treat the roll
		treatRoll : function(diceValue){
			// New position
			var newProg = Math.min(42, this.progress + diceValue);
			
			// Move the pawn
			return this.putPieceOnTile(newProg, true, true);
		},
		
		// Treat the tile action
		treatTile : function(tileId){
			// Tile has no Action
			var tile = this.tiles[tileId];
			if (!tile || !tile.action){
				var def = $.Deferred();
				def.resolve();
				return def.promise();
			}
			
			// Action
			return tile.action();
		},
		
		// Whole turn
		doPlay : function(forceValue){
			Game = this;
			// Roll the dice
			var rolled = this.rollDice(forceValue);
			
			// Move the paw
			var moved = rolled.then(function(dice){ return Game.treatRoll(dice); });
			
			// Launch the tile action
			var tiled = moved.then(function(tile){ return Game.treatTile(tile); });
			
			// Ready for next turn
			var ready = tiled.then(function(){ return Game.readyNextTurn(); });
		},
		
		// Ready
		readyNextTurn : function(){
			$('#dicewait').show();
		}
	};
	
	return Game;
});
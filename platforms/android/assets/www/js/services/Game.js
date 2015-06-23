app.service('GameSvc', function(){
	var Game = {
		// Properties
		progress		: 1,
		piece			: $('<div class="game-piece" id="piece"></div>'),
		dice			: null,
		tiles			: [],
		score			: 0,
		
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
		
		// Put the piece on a tile
		putPieceOnTile : function(tileId, animate){
			// Get the tile
			var tile = $('#tile'+tileId);
			var piece = $('#piece');
			if (!tile || !piece) console.error(tile, piece);
			
			// Compute position
			var position = tile.position();
			var left = position.left + 10;
			var top = position.top + 10;
			
			// Handler
			var def = new $.Deferred();
			function hMoveDone(){
				def.resolve(tileId);
			}
			
			// Move the pawn
			var props = { left: left+'px', top: top+'px' };
			if (animate){
				piece.animate(props, { complete : hMoveDone });
			} else {
				piece.css(props);
				hMoveDone();
			}
			
			this.progress = tileId;
			
			return def.promise();
		},
		
		// Roll the dice
		rollDice : function(){
			// Init
			var def = $.Deferred();
			
			function randomDice(){
				var diceValue = Math.floor(Math.random() * 6 + 1);
				$('#dice').css('backgroundPosition',((diceValue-1) * 20)+'% 0');
				return diceValue;
			}
			
			// Hide helper
			$('#dicewait').hide();
			
			// Roll
			var MaxRolls = Math.floor(Math.random() * 8) + 5;
			var rolling = window.setInterval(function(){
				var lastRoll = randomDice();
				if (MaxRolls-- <= 0){
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
			return this.putPieceOnTile(newProg, true);
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
		doPlay : function(){
			Game = this;
			// Roll the dice
			var rolled = this.rollDice();
			
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
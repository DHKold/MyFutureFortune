"use strict";
app.factory('FavoriteService', function () {
	var favorites = {"immo": "Immobilier: quiz", "acheterAppart": "Achat immobilier"};
	var service = {
		toggleFavorite : function(title, path) {
			if (favorites[path]) {
				delete favorites[path];
			} else {
				favorites[path] = title;
			}
		},
		getFavorites : function() {
			return favorites;
		}
	};
	return service;
});

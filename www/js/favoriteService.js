"use strict";
app.factory('FavoriteService', function () {
	var favorites = {"echeanceFiscale": "Mes echeances fiscales", "assuranceVoiture": "Assurance voiture", "assuranceVie": "Assurance vie", "aretraite": "Retraite", "bourse": "Bourse", "PEE": "PEE", "glossaire": "Petit glossaire"};
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

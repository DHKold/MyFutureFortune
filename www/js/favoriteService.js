"use strict";
app.factory('FavoriteService', function () {
	var favorites = {};
/*	var title;
	var path;
*/
	var service = {
/*		setToggleFavoriteButton(t, p) {
			title = t;
			path = p;
		},*/
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

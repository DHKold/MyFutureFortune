var app = angular.module('MyFutureFortuneApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/index', {
        templateUrl: 'partials/index.html',
        controller: 'IndexCtrl',
        controllerAs: 'index'
      })
      .when('/categoryAge', {
        templateUrl: 'partials/categoryAge.html',
        controller: 'CategoryAgeCtrl',
        controllerAs: 'categoryAge'
      })
	  .when('/questionWhenTax', {
        templateUrl: 'partials/questionWhenTax.html',
        controller: 'QuestionWhenTaxCtrl',
        controllerAs: 'questionWhenTax'
      })
	  .when('/infoEquilibrer', {
        templateUrl: 'partials/equilibrer.html',
        controller: 'EquilibrerCtrl',
        controllerAs: 'equilibrer'
      })
	  .when('/acheterAppart', {
        templateUrl: 'partials/acheterAppart.html',
        controller: 'AcheterAppartCtrl',
        controllerAs: 'acheterAppart'
      })
	  .when('/myFavorites', {
        templateUrl: 'partials/myFavorites.html',
        controller: 'MyFavoritesCtrl',
        controllerAs: 'myFavorites'
      })
	  .when('/aimePeche', {
        templateUrl: 'partials/aimePeche.html',
        controller: 'AimePecheCtrl',
        controllerAs: 'aimePeche'
      })
	  .when('/cinema', {
        templateUrl: 'partials/cinema.html',
        controller: 'CinemaCtrl',
        controllerAs: 'cinema'
      })
	  .when('/salarie', {
        templateUrl: 'partials/salarie.html',
        controller: 'SalarieCtrl',
        controllerAs: 'salarie'
      })
	  .when('/plateau', {
        templateUrl: 'partials/plateau.html',
        controller: 'PlateauCtrl'
      })
	  .when('/aFaireImpot', {
        templateUrl: 'partials/aFaireImpot.html',
        controller: 'AFaireImpotCtrl'
      })
	  .when('/immo', {
        templateUrl: 'partials/immo.html',
        controller: 'ImmoCtrl'
      })
	  .when('/trophy', {
        templateUrl: 'partials/trophy.html',
        controller: 'TrophyCtrl'
      })
	  .otherwise({redirectTo: 'index'});
//    $locationProvider.html5Mode(true);
}])

/*if (document.location.protocol == "file:") {
	document.addEventListener("deviceready", function() {
		navigator.splashscreen.show();
		setTimeout(function() {
			navigator.splashscreen.hide();
		}, 2000);
	}, false);
}*/
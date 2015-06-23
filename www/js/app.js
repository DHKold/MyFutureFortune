
var app = angular.module('MyFutureFortuneApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/index', {
        templateUrl: 'partials/index.html'
//        controller: 'IndexCtrl',
//        controllerAs: 'index'
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
	  .otherwise({redirectTo: 'index'});

//    $locationProvider.html5Mode(true);
}])
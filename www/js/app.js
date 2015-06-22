
var app = angular.module('MyFutureFortuneApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/index', {
        templateUrl: 'partials/index.html'
//        controller: 'IndexCtrl',
//        controllerAs: 'index'
      })
      .when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: 'ChapterCtrl',
        controllerAs: 'chapter'
      }).otherwise({redirectTo: 'index'});

//    $locationProvider.html5Mode(true);
}])
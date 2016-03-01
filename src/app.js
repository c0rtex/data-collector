(function() {
  'use strict';

  angular.module('dataCollectorApp', ['ngMaterial', 'ngRoute', 'md.data.table'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('red');
    })
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './src/view/default.html'
        })
        .when('/answer-field', {
          templateUrl:  './src/view/answer-field.html'
        })
        .when('/question', {
          templateUrl:  './src/view/question.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
(function() {
  'use strict';

  angular.module('dataCollectorApp', ['ngMaterial', 'ngRoute', 'md.data.table'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
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
        .otherwise({
          redirectTo: '/'
        });
    });
})();
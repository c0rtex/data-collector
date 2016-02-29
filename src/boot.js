(function() {
  'use strict';
  
  angular.module('dataCollectorApp', ['ngMaterial'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple')
        .accentPalette('red');
    })
    .controller('MainController', ['$mdSidenav', MainController]);

  /**
   * Main Controller for the Data Collector App
   *
   * @param $mdSidenav
   * @constructor
   */
  function MainController($mdSidenav) {
    var self = this;

    self.toggleSidenav = toggleSidenav;

    function toggleSidenav() {
      $mdSidenav('left').toggle();
    }

  }
})();
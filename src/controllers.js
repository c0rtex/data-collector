(function() {
  'use strict';

  angular.module('dataCollectorApp')
    .controller('MainController', ['toolService', '$mdSidenav', MainController]);

  /**
   * Main Controller for the Data Collector App
   *
   * @param $mdSidenav
   * @constructor
   */
  function MainController(toolService, $mdSidenav) {
    var self = this;

    self.toolSelected = null;
    self.tools = [];
    self.toggleSidenav = toggleSidenav;
    self.selectTool = selectTool;

    toolService
      .loadAllTools()
      .then(function(tools) {
        self.tools = [].concat(tools);
      });

    function toggleSidenav() {
      $mdSidenav('left').toggle();
    }

    function selectTool(tool) {
      self.toolSelected = angular.isNumber(tool) ? self.tools[tool] : tool;
      toggleSidenav();
    }
  }
})();
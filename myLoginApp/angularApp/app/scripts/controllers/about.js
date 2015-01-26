'use strict';

/**
 * @ngdoc function
 * @name myLoginApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myLoginApp
 */
angular.module('myLoginApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

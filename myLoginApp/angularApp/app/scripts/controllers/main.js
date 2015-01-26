'use strict';

/**
 * @ngdoc function
 * @name myLoginApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myLoginApp
 */
angular.module('myLoginApp')
  .controller('MainCtrl', function ($scope, userService) {

    $scope.userService = userService;

  });

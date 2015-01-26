'use strict';

/**
 * @ngdoc directive
 * @name myLoginApp.directive:loginDialog
 * @description
 * # loginDialog
 */
angular.module('myLoginApp')
  .directive('loginDialog', function (AUTH_EVENTS) {
	  return {
	    restrict: 'A',
	    template: '<div ng-if="visible" ng-include="\'views/login.html\'">',
	    controller: 'LoginCtrl',
	    link: function (scope) {
	      var showDialog = function () {
	        scope.visible = true;
	      };

	      var hideDialog = function () {
	        scope.visible = false;
	      };
	  
	      scope.visible = false;

	      scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
	      scope.$on(AUTH_EVENTS.sessionTimeout, showDialog);

	      scope.$on(AUTH_EVENTS.notNecessary, hideDialog);
	      scope.$on(AUTH_EVENTS.loginSuccess, hideDialog);

	    }
	  };
  });
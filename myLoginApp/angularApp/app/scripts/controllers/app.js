'use strict';

/**
 * @ngdoc function
 * @name myLoginApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the myLoginApp
 */
angular.module('myLoginApp')
	.controller('AppCtrl', function ($scope, USER_ROLES, AUTH_EVENTS, authenticationService, userService) {

		$scope.currentUser = userService.getUser();
		$scope.userRoles = USER_ROLES;
		$scope.isAuthorized = authenticationService.isAuthorized;

		$scope.setCurrentUser = function (user) {
			$scope.currentUser = user;
		};

		$scope.logout = function() {
			authenticationService.logout();
			$scope.currentUser = null;
			$scope.$emit(AUTH_EVENTS.logoutSuccess);
			console.log('logout success');
		};

	});

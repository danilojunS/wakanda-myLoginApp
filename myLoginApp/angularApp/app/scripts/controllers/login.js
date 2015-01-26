'use strict';

/**
 * @ngdoc function
 * @name myLoginApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myLoginApp
 */
angular.module('myLoginApp')
  .controller('LoginCtrl', function ($scope, $rootScope, AUTH_EVENTS, authenticationService, userService) {
	$scope.credentials = {
		email: '',
		password: ''
	};

	$scope.login = function (credentials) {

		authenticationService.login(credentials).then(function (user) {
		  console.log('login success');
		  
		  userService.setUser(user);
		  $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

		}, function () {
		  console.log('login error');

		  $rootScope.$broadcast(AUTH_EVENTS.loginFailed);

		});
		
	};

  });

'use strict';

/**
 * @ngdoc directive
 * @name myLoginApp.directive:UserMenu
 * @description
 * # UserMenu
 */
angular.module('myLoginApp')
  .directive('userMenu', function (AUTH_EVENTS, authenticationService, userService) {
    return {
      templateUrl: 'views/usermenu.html',
      restrict: 'E',
      link: function postLink(scope) {
      	  scope.userService = userService;

      	  scope.logout = function() {

      			authenticationService.logout().then(function () {

      				userService.setUser(null);
      				scope.$emit(AUTH_EVENTS.logoutSuccess);

      				console.log('logout success');

      			}, function () {

      				console.log('logout error');

			      });

		      };

      }
    };
  });

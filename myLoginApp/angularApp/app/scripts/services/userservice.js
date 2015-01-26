'use strict';

/**
 * @ngdoc service
 * @name myLoginApp.userService
 * @description
 * # userService
 * Factory in the myLoginApp.
 */
angular.module('myLoginApp')
  .factory('userService', function () {
    // Service logic

    var userService = {};

    var user = null;

    userService.getUser = function () {
    	return user;
    };

    userService.getUserName = function(){
        return user.name;
    };

    userService.getUserRole = function(){
        return user.role;
    };

    userService.setUser = function (newUser) {
    	user = newUser;
    };

    return userService;
  });

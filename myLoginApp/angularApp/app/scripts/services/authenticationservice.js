'use strict';

/**
 * @ngdoc service
 * @name myLoginApp.AuthenticationService
 * @description
 * # AuthenticationService
 * Factory in the myLoginApp.
 */
angular.module('myLoginApp')
  .factory('authenticationService', function ($http, $q, sessionService, $wakanda) {

    var authService = {};

    

    authService.login = function (credentials) {
      
      return $wakanda.$login(credentials.email, credentials.password).then(function(loginResult) {
        if(loginResult.result === true) {
        // logged in
          console.log('Wakanda: Logged in');

          $wakanda.$currentUser().then(function (user) {
            console.log('The current user is: ');
            console.log(user);
          });


        } else {
        // not logged in
          console.log('Wakanda: Not logged in');
        }
      });

      // return $q(function(resolve, reject) {
      //   setTimeout(function() {
      //     if (credentials.email === 'user' && credentials.password === '123') {

      //       var res = {
      //         data : {
      //           id: 'dataID',
      //           user: {
      //             id: 'userID',
      //             name: 'User Test',
      //             role: 'admin'
      //           }
      //         }
      //       };

      //       resolve(res);

      //     } else {
      //       reject('It broke');
      //     }
      //   }, 1000);
      // }).then(function (res) {
      //   sessionService.create(res.data.id, res.data.user.id, res.data.user.role);

      //   return res.data.user;
      // });

      // return $http
     //      .post('data/user.php', credentials)
     //      .then(function (res) {

     //       console.log(res);

     //        sessionService.create(res.data.id, res.data.user.id,
     //                       res.data.user.role);
     //        return res.data.user;
     //      });
    };

    authService.logout = function () {
      
      return $q(function(resolve) {
        setTimeout(function() {
          resolve();
        }, 1000);
      }).then(function () {
        sessionService.destroy();
      });

    };

    authService.isAuthenticated = function () {
      return !!sessionService.getUserId();
    };

    authService.isAuthorized = function (authorizedRoles) {
      // only verify if user has rights to see the page if the page has any restriction
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(sessionService.getUserRole()) !== -1);
    };

    return authService;
  });

'use strict';

/**
 * @ngdoc router
 * @name myApp
 * @description
 * # myApp
 *
 * Main module of the application.
 */
//create a module myApp
var myApp = angular.module('myApp', [
    'ngRoute']); // Add dependency 'ui.bootstrap' for bootstrap support
 
//Now Configure  our  routing
myApp.config(['$routeProvider', '$locationProvider','$httpProvider',
              function($routeProvider, $locationProvider,$httpProvider) {
    alert("in app.js");
    $routeProvider
    .when('/login',
    {
        controller: 'loginCtrl',
        templateUrl: 'App/module/login/view/login.html'
    })
       .otherwise({
        redirectTo: '/login'
    });
   }]);
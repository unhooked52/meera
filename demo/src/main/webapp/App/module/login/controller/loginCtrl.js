'use strict';

/**
 * @ngdoc function
 * @name loginCtrl
 * @description # loginCtrl Controller of the myApp
 */
myApp.controller('loginCtrl',[ '$scope','apiHttpService',
                                function($scope,apiHttpService) {

	var login = function(){
		alert("in login ctrl");
		apiHttpService.get('restServices/getUserDetails', null, function(response){
			console.log("success in login!" + response);
			},function error(){
				alert('error! Please try again!!!');
				//console.log(error);
			});
		};
		
		login();
}]);

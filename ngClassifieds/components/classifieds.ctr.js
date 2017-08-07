(function(){
	"use strict";

	angular
		.module("ngUsers")
		.controller('githubCtrl', function ($scope, $http) {
			
			//$scope.username = "mtpjr88";

			$http({
				method: 'GET',

				url: "https://api.github.com/users"//+$scope.username  

			}).then(function successCallback(response){

				$scope.userData = response.data;

				console.log(response);

			}, function errorCallback(err) {

				console.log(err);
			});

			
		});
})();
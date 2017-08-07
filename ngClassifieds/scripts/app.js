angular
	.module("ngUsers",["ngMaterial"])
	.config(function($mdThemingProvider) {

		$mdThemingProvider.theme('default')
			.primaryPalette('blue')
			.accentPalette('orange');


	})
	.directive("ngUsers", function () {
		return {
			template: "<h1>{{ message }}</h1>"
		}
	});
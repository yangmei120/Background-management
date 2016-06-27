angular.module('myApp').config(function($routeProvider) {
	$routeProvider.when('/index', {
		templateUrl: 'views/main.html'
	});
	$routeProvider.when('/grid', {
		templateUrl: 'views/grid.html'
	});
	$routeProvider.when('/check', {
		templateUrl: 'views/check.html'
	});
	$routeProvider.when('/ui-progressbars', {
		templateUrl: 'views/ui-progressbars.html'
	});
	$routeProvider.when('/ui-buttons', {
		templateUrl: 'views/ui-buttons.html'
	});
	$routeProvider.when('/sweet', {
		templateUrl: 'views/sweet.html'
	});
	$routeProvider.otherwise({
		redirectTo: '/index'
	});
});

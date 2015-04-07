
var routerApp = angular.module('routerApp', 
	[
	'ui.router', 
	'pageService',
	'angular-loading-bar', 
	'ngAnimate', 
	'blockUI',
	'ng-isotope'
	]);

routerApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.latencyThreshold = 50;
  }]);

routerApp.config(function(blockUIConfig) {
  // Change the default overlay message
	// blockUIConfig.message = 'Please stop clicking!';
  // Change the default delay to 100ms before the blocking is visible
	blockUIConfig.delay = 200;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

	    // Home
	    .state('home', {
	        url: '/home',
	        views: {
	            '': { 
	            	templateUrl: 'partial/views/home.html',
	            	controller: 'homeController'
	             },
	            'vw-header': { templateUrl: 'partial/views/header.html'},
	            'vw-about': { 
    		        templateUrl: 'partial/views/about.html',
			        controller: 'aboutController'
	            },
	            'vw-portfolio': { 
	                templateUrl: 'partial/views/portfolio.html',
	                controller: 'portfolioController'
	            },
	            'vw-contact': { 
			        templateUrl: 'partial/views/contact.html'
	            },
	            'vw-gallery': { 
			        templateUrl: 'partial/views/gallery.html'
	            }
	        }
	   	});
});
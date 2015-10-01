angular.module('my-laravel-blog',[
								'ngSanitize',
								'ngMessages',
								'ngPassword',
								'ngAnimate',
								'ui.router',
								'ui.mask',
								'ui.sortable',
								'ui.bootstrap',

								'factories.general',
								'directives.general',
								'filters.general',
								'controller.home'
							])

.config(function($httpProvider, $stateProvider, $urlRouterProvider){

	// Now set up the states
	$stateProvider
		.state('home', {
			url: "/home",
			cache: false,
			templateUrl: "view/site.home.index",
			controller: "HomeCtrl"
		})
	;

	$urlRouterProvider.otherwise(function(){
		return 'home';
	});

	$httpProvider.interceptors.push('HttpInterceptor');

})

.run(function($rootScope,$state,$stateParams,$modal,$http,$q,$timeout) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

})

































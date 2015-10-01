angular.module('my-laravel-blog',[
	'ngSanitize',
	'ngAnimate',
	'jcs-autoValidate',

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

	var routes = [
		{
	        name: 'home',
	        url: '/',
			cache: false,
			controller: "HomeCtrl",
			templateUrl: "view/site.home.index"
	    },
	    {
	    	name: 'contact',
	        url: '/contact',
			cache: false,
			templateUrl: "view/site.contact.index"
		}
	];

	for(i in routes){
    	$stateProvider.state(routes[i]);
	}

	$urlRouterProvider.otherwise(function(){
		return '/';
	});

	$httpProvider.interceptors.push('HttpInterceptor');

})

.run(function($rootScope,$state,$stateParams,$modal,$http,$q,$timeout,defaultErrorMessageResolver) {


	/*
	 * Angular Auto Validate errors messages config
	 */
	defaultErrorMessageResolver.setI18nFileRootPath('site/js/angular-auto-validate/lang/');
    defaultErrorMessageResolver.setCulture('pt-br');

    
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;


    /*
     * Header menu items configuration
     */
    $rootScope.sideMenu = {
    	"home" : {
    		icon : "home",
    		label : "Home",
    		sref : "home",
    		activeState : ['home']
    	},
    	"contact" : {
    		icon : "paper-plane-o",
    		label : "Contact",
    		sref : "contact",
    		activeState : ['contact']
    	},
    };

    /*
     * Function used for add active class to activate menu based on first position of route name
     */
    $rootScope.activeMenu = function(item){

    	var names = $state.current.name.split('.');

    	for ( i in item.activeState ){    		
    		if ( item.activeState[i] == names[0] ){
    			return true;
    		} 
    	}
    	return false;
    };


})

































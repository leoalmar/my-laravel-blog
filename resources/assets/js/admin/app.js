angular.module('dashboard',[
	'ngSanitize',
	'ngPassword',
	'ngAnimate',
	
	'ui.router',
	'ui.mask',
	'ui.sortable',
	'ui.bootstrap',

	'factories.general',
	'directives.general',
	'filters.general',

	'services.users',
	'services.permissions',

	'controller.home',
	'controller.users'								
])

.config(function($httpProvider, $stateProvider, $urlRouterProvider){
	
	// Now set up the states
	/*
	$stateProvider

		.state('users', {
			url: "/users",
			cache: false,
			templateUrl: "view/admin.users.index",
			controller: "UsersCtrl",
			resolve: {
				logged: function($rootScope){
					return $rootScope.isLogged();
				}
			},
			add : {
				state : "add_user",
				text : "Cadastrar novo usuário"
			},
			breadcrumbs : [
				{ label : 'Usuários' }
			]
		})
		.state('user', {
			url: "/users/user/{id:int}",
			cache: false,
			templateUrl: "view/admin.users.user",
			controller: "UserCtrl",
			resolve : {
				logged: function($rootScope){
					return $rootScope.isLogged();
				},
				Add : function(){
					return false;
				}
			},
			breadcrumbs : [
				{ 
					state : "users",
					label : 'Usuários'
				},
				{ 
					label : 'Usuário'
				}
			]
		})
		.state('add_user', {
			url: "/users/add_user",
			cache: false,
			templateUrl: "view/admin.users.user",
			controller: "UserCtrl",
			resolve : {
				logged: function($rootScope){
					return $rootScope.isLogged();
				},
				Add : function(){
					return true;
				}
			},
			breadcrumbs : [
				{ 
					state : "users",
					label : 'Usuários'
				},
				{ 
					label : 'Cadastro de usuário'
				}
			]
		})
		.state('permissions', {
			url: "/users/permissions/{id:int}",
			cache: false,
			templateUrl: "view/admin.users.permissions",
			controller: "PermissionsCtrl",
			resolve : {
				Add : function(){
					return true;
				}
			}
		})

	
		.state('login', {
			url: "/login",
			cache: false,
			templateUrl: "view/admin.login.index",
			controller: "LoginCtrl",
			breadcrumbs : [
				{ label : 'Login' }
			]
		})

		.state('home', {
			url: "/home",
			cache: false,
			breadcrumbs : [
				{ label : 'Home' }
			]
		})

		.state("banners",routeGenerate("/banners","Banners","banners.index",[{label:'Banners'}],{state:"add_banner",text:"Cadastrar novo Banner"}))
		.state("banner",routeGenerate("/banners/banner/{id:int}","Banner","banners.banner",[{label:'Banners'},{label:'Banner'}]))
		.state("add_banner",routeGenerate("/banners/add_banner","Banner","banners.banner",[{state:"banners",label:'Banners'},{label:'Cadastro de Banner'}]))

	;

	$urlRouterProvider.otherwise(function(){
		return 'home';
	});
	*/

	var routes = [
		{
	        name: 'home',
	        url: '/',
			cache: false,
			controller: "HomeCtrl",
			templateUrl: "view/admin.home.index",
			resolve: {
				user : function($rootScope, UsersService) {
					return UsersService.check().then(function(data){
						$rootScope.user = data.data.user;
					});
				}
			},
			breadcrumbs : [
				{ label : 'Home' }
			]
	    },
	    {
	    	name : 'login',
			url: "/login",
			cache: false,
			templateUrl: "view/admin.login.index",
			controller: "LoginCtrl",
			breadcrumbs : false
		},
		{
			name : "users",
			url: "/users",
			cache: false,
			templateUrl: "view/admin.users.index",
			controller: "UsersCtrl",
			add : {
				state : "add_user",
				text : "Cadastrar novo usuário"
			},
			breadcrumbs : [
				{ label : 'Usuários' }
			]
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

.run(function($rootScope,$state,$stateParams,$modal,$http,$q,$timeout,UsersService) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.breadcrumbs = false;
    $rootScope.manualActiveMenu = false;

    $rootScope.user = false;

    /*
     * Header menu items configuration
     */
    $rootScope.sideMenu = {
    	"home" : {
    		label : "Home",
    		icon : "home",
    		sref : "home",
    		activeState : ['home']
    	},
    	"users" : {
    		label : "Users",
    		icon : "users",
    		sref : "users",
    		activeState : ['users'],
    		permissions : ["admin.users."]
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

    $rootScope.hasAccess = function(item){

    	if(!item.permissions) return true;

    	var roles = $rootScope.user.roles;

    	var permissions = [];

    	for(i in roles){

	    	for( permission in roles[i].permissions){

				for (k in item.permissions) {
					
					var p = item.permissions[k];
					
					var last_char = p.charAt(p.length - 1);

					if(last_char == "."){
				
						if( permission.search(p) === 0) return true;

					}else if(permission == p){					

						return true;
					}
				}
			}	    	
    	}

    	return false;
    };

    $rootScope.logout = function(){

    	UsersService
    		.logout()
    		.then(function(data){
    	
    			$rootScope.user = false;
    			$state.go("login");
		    
			},function(){
		    	return false;
			});
    };
	
	$rootScope.getImage = function(image, width, height, effects) {

    	var file = image.split('.');
    	var size = (width && height) ? width+"x"+height : "";
    	var effects = (effects) ? "-" + effects.join('-') : "";
    	var path = "/img/"+file[0]+"-image("+size+effects+")."+file[1];
    	
    	return path;
    };

})

































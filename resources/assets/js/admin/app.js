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

	'controller.dashboard',
	'controller.users'								
])

.config(function($httpProvider, $stateProvider, $urlRouterProvider){
	

	function routeGenerate(URL,ctrl,view,breadcrumbs,add){
		
		var is_add_page = ( URL.indexOf("add_") != -1 );

		var obj = {
			cache: false,
			url: URL,
			controller: ctrl+"Ctrl",
			templateUrl: "view/admin.partials."+view,
			resolve : {
				logged: function($rootScope){
					return $rootScope.isLogged();
				},
				Add : function(){
					return is_add_page;
				}
			},			
			breadcrumbs : breadcrumbs || false
		};

		if(add){
			obj.add = add;
		}

		return obj;
	}


	// Now set up the states
	$stateProvider

		.state('users', {
			url: "/users",
			cache: false,
			templateUrl: "view/admin.partials.users.index",
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
			templateUrl: "view/admin.partials.users.user",
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
			templateUrl: "view/admin.partials.users.user",
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
			templateUrl: "view/admin.partials.users.permissions",
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
			templateUrl: "view/admin.partials.login.index",
			controller: "LoginCtrl",
			breadcrumbs : [
				{ label : 'Login' }
			]
		})

		.state('home', {
			url: "/home",
			cache: false,
			templateUrl: "view/admin.partials.home.index",
			controller: "DashboardCtrl",
			resolve: {
				logged: function($rootScope){
					return $rootScope.isLogged();
				}
			},
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

    $rootScope.sideMenu = {
    	"home" : {
    		icon : "home",
    		label : "Home",
    		sref : "home",
    		activeMenu : ['home'],
    		permissions : false
    	},
    	"users" : {
    		icon : "users",
    		label : "Usuários",
    		sref : "users",
    		activeMenu : ['users','add_user','user'],
    		permissions : ["user.view"]
    	}
    };

    $rootScope.user = false;
    $rootScope.saveHover = false;

    $rootScope.isLogged = function(){

    	var logged = UsersService.check()
    		.then(function(data){
    			$rootScope.user = data.data;
	    		return true;
		    },function(){
	    		return false;
		   	}
	    );
    };



    $rootScope.hasAccess = function(permissions){

    	//return true;

    	if(!permissions) return true;

    	var groups = $rootScope.user.groups;

    	var groups_permissions = groups.map(function(e, index){
    		return e.permissions;
    	});
    	
    	for( i in groups_permissions){    		

    		var p = groups_permissions[i];

    		for( k in p){	    		

    			for( x in permissions ){

		    		if(p[k] == 1 && k == permissions[x]){
		    			return true;
		    		}
    			}
	    	}
    	}

    	return false;
    };




	

})

































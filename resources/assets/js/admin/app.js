angular.module('dashboard',[
	'ngSanitize',
	'ngAnimate',
	'jcs-autoValidate',
	'ngPassword',
	
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
	
	function generalResolver(){
		return {
			check : function($rootScope) {
				return $rootScope.check();
			}
		};
	}

	var routes = [
	    {
	    	name : 'login',
			url: "/login",
			cache: false,
			templateUrl: "view/admin.login.index",
			controller: "LoginCtrl",
			breadcrumbs : false
		},
		{
	        name: 'home',
	        url: '/',
			cache: false,
			controller: "HomeCtrl",
			templateUrl: "view/admin.home.index",
			resolve: generalResolver(),
			breadcrumbs : [
				{ label : 'Home' }
			]
	    },
		{
			name : "users",
			url: "/users",
			cache: false,
			controller: "UsersCtrl",
			templateUrl: "view/admin.users.index",
			resolve: generalResolver(),
			breadcrumbs : [
				{ label : 'Usuários' }
			],
			add : {
				state : "add_user",
				text : "Cadastrar novo usuário"
			}
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

.run(function($rootScope,$state,$stateParams,$modal,$http,$q,$timeout,$parse,defaultErrorMessageResolver,UsersService) {

	/*
	 * Angular Auto Validate errors messages config
	 */
	defaultErrorMessageResolver.setI18nFileRootPath('admin/js/angular-auto-validate/lang/');
    defaultErrorMessageResolver.setCulture('pt-br');

    $rootScope.responseErrorValidate = function(form,response){

    	var responsePrefix = 'response';

    	var error = response.error;

		defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
			error.forEach(function(element, index, array){
	        	errorMessages[responsePrefix+element.field] = element.message;
	        });		
		});

		error.forEach(function(element, index, array){
			eval("form."+element.field+".$validators."+responsePrefix+element.field+" = function(){return false;};");
	        eval("form."+element.field+".$validate();");			
		});

		if(response.focus || response.select){
			if(response.focus){
				$("[name="+response.focus+"]").focus();
			}else{
				$("[name="+response.select+"]").select();						
			}
		}

		error.forEach(function(element, index, array){
			eval("form."+element.field+".$validators."+responsePrefix+element.field+" = function(){return true;};");
		});

    };




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

    $rootScope.check = function(){
    	UsersService.check().then(function(data){
			$rootScope.user = data.data.user;
		});
		return true;
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

































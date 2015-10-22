angular.module('dashboard',[
	'ngSanitize',
	'ngAnimate',
	'jcs-autoValidate',
	'ngPassword',
	
	'ui.router',
	'ui.mask',
	'ui.sortable',
	'mgcrea.ngStrap',

	'factories.general',
	'directives.general',
	'filters.general',

	'services.users',
	'services.permissions',

	'controller.home',
	'controller.users',						
	'controller.roles'						
])

.config(function($httpProvider, $stateProvider, $urlRouterProvider, $modalProvider){
	
	/**
	 * This function is used for the most of routes.
	 * Will be responsible to check if the user is logged.
	 *  
	 * @return object
	 */
	function generalResolver(){
		return {
			check : function($rootScope) {
				return $rootScope.check();
			}
		};
	}

	/**
	 * This variable is used to add the propertie to all routes
	 * 
	 * @type Object
	 */
	var configRoutes = {
		cache : false
	};

	/**
	 * Routes array
	 * 
	 * @type Array
	 */
	var routes = [
	    {
	    	name : 'login',
			url: "/login",
			templateUrl: "view/admin.login.index",
			controller: "LoginCtrl",
			breadcrumbs : false
		},
		{
	        name: 'home',
	        url: '/',
			controller: "HomeCtrl",
			templateUrl: "view/admin.home.index",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Home' }]
	    },
		{
			name : "users",
			url: "/users",
			controller: "UsersCtrl",
			templateUrl: "view/admin.users.index",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Users' }],
			add_button : { state : "user", text : "Add User" }
		},
		{
			name : "user",
			url: "/users/user/:id",
			controller: "UserCtrl",
			templateUrl: "view/admin.users.user",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Users', state : "users" },{ label : 'User data' }]
		},
		{
			name : "roles",
			url: "/roles",
			controller: "RolesCtrl",
			templateUrl: "view/admin.roles.index",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Roles' }],
			add_button : { state : "role", text : "Add Role" }
		},
		{
			name : "role",
			url: "/roles/role/:id",
			controller: "RoleCtrl",
			templateUrl: "view/admin.roles.role",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Roles', state : "roles" },{ label : 'Role data' }]
		}
	];

	for(i in routes){
    	$stateProvider.state( angular.extend(routes[i], configRoutes) );
	}

	$urlRouterProvider.otherwise(function(){
		return '/';
	});

	$httpProvider.interceptors.push('HttpInterceptor');


	angular.extend($modalProvider.defaults, {
		animation: 'am-fade-and-scale',
		placement: 'center'
	});


})

.run(function($rootScope,$state,$stateParams,$modal,$http,$q,$timeout,$parse,$modal,defaultErrorMessageResolver,UsersService) {

	/*
	 * Angular Auto Validate errors messages config
	 */
	angular.autoValidate.errorMessages = {}; // fix the bug to search the JSON file with messages
	defaultErrorMessageResolver.setI18nFileRootPath('admin/js/angular-auto-validate/lang/');
    defaultErrorMessageResolver.setCulture('en-us');

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
    	"roles" : {
    		label : "Roles",
    		icon : "puzzle-piece",
    		sref : "roles",
    		activeState : ['roles'],
    		permissions : ["admin.roles."]
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
	
    // Called when the OK button at Modal is clicked
    $rootScope.modal = function(params){

    	$rootScope.params = params;

    	var templateUrl = 'view/admin.modal.' + (params.type || 'default');

		var config = {
			title: params.title,
    		templateUrl: templateUrl, 
    		show: true,
    		scope: $rootScope
    	};

    	var modal = $modal(config);

    	$rootScope.modal.hide = function() {
    		modal.$promise.then(modal.hide);
    	};

    	/*
    	params.role.$delete({id:params.role.id},function(){
    		$scope.roles.splice(params.index,1);
    	});
		*/
    };







	$rootScope.getImage = function(image, width, height, effects) {

    	var file = image.split('.');
    	var size = (width && height) ? width+"x"+height : "";
    	var effects = (effects) ? "-" + effects.join('-') : "";
    	var path = "/img/"+file[0]+"-image("+size+effects+")."+file[1];

    	return path;
    };

})

































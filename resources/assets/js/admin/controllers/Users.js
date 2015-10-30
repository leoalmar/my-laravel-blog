angular.module('controller.users',[])

.controller("LoginCtrl", function($rootScope,$scope,$state,$stateParams,UsersService,defaultErrorMessageResolver){

	$scope.user = false;

	$scope.submitForm = function(form){

		$scope.loading = true;

		UsersService.authenticate($scope.user).then(function(data){

			var response = data.data;

			if(response.success){
				$state.go("home",null,{reload: true});
			}else{
				$scope.loading = false;
				$rootScope.responseErrorValidate(form,response);				
			}

		},function(){
			$scope.loading = false;
		});
	};
})

.controller("UsersCtrl",function($rootScope,$scope,$state,UsersService){

	$scope.users = [];

	$scope.users = UsersService.resource.query(function(data){
    	$scope.users = data;
    });

    $scope.delete = function(data){
    	data.user.$delete({id:data.user.id},function(){
    		$scope.users.splice(data.index,1);
    		$rootScope.modal.hide();
    	});
    };

})

.controller("UserCtrl",function($rootScope,$scope,$state,$stateParams,$timeout,UsersService,fileReader){

	$scope.form = {};
	$scope.loading = false;

	$scope.add = ($stateParams.id == ""); // Check if the page is Creating ou Updating resource

	$timeout(function(){
		
	},1);

	if($scope.add)
	{
		$scope.user = new UsersService.resource();
	}
	else
	{
		$scope.user = UsersService.resource.get({ id:$stateParams.id }, function(data){
	        return data;
	    });
	}
	
	$scope.save = function(form){
		
		$scope.loading = true;

		if($scope.add){
			// Creating
			$scope.user.$save(function(data) {
				$scope.loading = false;
				$state.go("users",null,{reload: true});
			});
		
		}else{
			// Updating
			$scope.user.$update(function(data) {
				$scope.loading = false;
				$state.go("users",null,{reload: true});
			});
		
		}
	};


})

.controller("PermissionsCtrl",function($rootScope,$scope,$state,$stateParams,PermissionsService){

	$scope.user = false;
	
	$scope.groups = [];

	$rootScope.manualActiveMenu = $rootScope.sideMenu["users"];
    $rootScope.breadcrumbs = [
        { state : "users", label : 'Usuários' }        
    ];



	$scope.hasGroup = function(id){

		var user_groups = $scope.user.user_groups;

		for(i in user_groups){
			if(user_groups[i].id == id) return true;
		}

		return false;
	};

	$scope.switchGroup = function(id){

		var action = $scope.groups[id] ? 1 : 0; // If the checkbox is checked returns true
		var data = PermissionsService.saveGroup($scope.user.user.id,id,action);
	};

	$scope.user = PermissionsService.resource.get( { id:$stateParams.id },function(data){

		$rootScope.breadcrumbs.push({label : data.user.first_name+' '+data.user.last_name+' - Permissões'});

        return data;
    });

})


















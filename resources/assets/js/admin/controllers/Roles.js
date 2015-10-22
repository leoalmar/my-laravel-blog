angular.module('controller.roles',['services.roles'])

.controller("RolesCtrl",function($rootScope,$scope,$state,RolesService){

	$scope.roles = [];

	$scope.roles = RolesService.resource.query(function(data){
    	$scope.roles = data;
    });

    $scope.delete = function(data){   	
    	data.role.$delete({id:data.role.id},function(){
    		$scope.roles.splice(data.index,1);
    		$rootScope.modal.hide();
    	});
    };

})

.controller("RoleCtrl",function($rootScope,$scope,$state,$stateParams,RolesService){

	$scope.loading = false;

	$scope.add = ($stateParams.id == ""); // Check if the page is Creating ou Updating resource

	if($scope.add)
	{
		$scope.role = new RolesService.resource();
	}
	else
	{
		$scope.role = RolesService.resource.get({ id:$stateParams.id }, function(data){
	        return data;
	    });
	}
	
	$scope.save = function(form){
		
		$scope.loading = true;

		if($scope.add){
			// Creating
			$scope.role.$save(function(data) {
				$scope.loading = false;
				$state.go("roles",null,{reload: true});
			});
		
		}else{
			// Updating
			$scope.role.$update(function(data) {
				$scope.loading = false;
				$state.go("roles",null,{reload: true});
			});
		
		}
	};


})



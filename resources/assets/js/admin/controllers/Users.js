angular.module('controller.users',[])

.controller("LoginCtrl", function($scope,$state,$stateParams,UsersService){

	$scope.user 	= false;
	$scope.loading 	= false;

	$scope.authenticate = function(form){

		$scope.message = false;
		$scope.loading = true;

		UsersService.authenticate($scope.user).then(function(data){

			var response = data.data;

			if(response.success){
				$state.go("home",{reload: true});
			}else{
				var error = response.error;
				$scope.message = error.message;
				$("[name="+error.field+"]").select();
			}
			$scope.loading = false;

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

    $scope.delete = function(params){
    	params.user.$delete({id:params.user.id},function(){
    		$scope.users.splice(params.index,1);
    	});
    };

})

.controller("UserCtrl",function($rootScope,$scope,$state,$stateParams,UsersService,Add,fileReader){

	$scope.add = Add;

	$scope.user = !Add ? false : new UsersService.resource();

	$scope.fileURL = false;	
	$scope.loading = false;

    $scope.getFile = function () {
        fileReader
        	.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
            	var fileName = $scope.file.name.split('.');
				var extension = fileName.pop().toLowerCase();

				if( extension == "jpeg" || extension == "jpg" || extension == "bmp" || extension == "png" || extension == "gif" ){
            		$scope.user.image = result;
				}
            });
    };
	
	$scope.save = function(form){
		$scope.loading = true;
		if($scope.add){
			$scope.user.$save(function() {
				$scope.loading = false;
				$state.go("users",{reload: true});
			});
		}else{
			$scope.user.$update(function(data) {
				$scope.loading = false;
				$scope.fileURL = data.image;
				delete data.image;
				$state.go("users",{reload: true});
			});
		}
	};

	if(!Add){
		$scope.user = UsersService.resource.get( { id:$stateParams.id },function(data){
			$scope.fileURL = data.image;
			delete data.image;
	        return data;
	    }); 
	}

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


















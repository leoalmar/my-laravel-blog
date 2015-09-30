angular.module('controller.banners',[])

.controller("BannersCtrl",function($rootScope,$scope,$state,$timeout,BannersService){

	$scope.loading = false;
	$scope.banners = false;
	
	$scope.sortableOptions = {
		stop: function(e, ui) { 
			//$timeout(function(){
				var ids = $scope.banners.map(function(e,index){
					return e.id;
				});
				BannersService.saveOrder(ids);				
			//});
		},
		axis: 'y'
	};

  	function getBanners(){

		$scope.loading = true;

		BannersService.resource.query(function(data){
			$scope.banners = data;
			$scope.loading = false;
	    });  		
  	}

  	$timeout(function(){
	  	getBanners();
  	});

    $scope.delete = function(params){

    	var banner = new BannersService.resource();

    	banner.$delete({id:params.banner.id},function(){
    		$scope.banners.splice(params.index,1);
    	});
    };

})

.controller("BannerCtrl",function($rootScope,$scope,$state,$stateParams,$timeout,BannersService,Add,fileReader){

	$scope.add = Add;

	$scope.banner = !Add ? false : new BannersService.resource();

	$scope.fileURL = false;	
	$scope.loading = false;

    $scope.getFile = function () {
        fileReader
        	.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
            	var fileName = $scope.file.name.split('.');
				var extension = fileName.pop().toLowerCase();

				if( extension == "jpeg" || extension == "jpg" || extension == "bmp" || extension == "png" || extension == "gif" ){
            		$scope.banner.image = result;
				}
            });
    };
	
	$scope.save = function(form){
		$scope.loading = true;
		if($scope.add){
			$scope.banner.$save(function() {
				$scope.loading = false;
				$state.go("banners",{reload: true});
			});
		}else{
			$scope.banner.$update(function(data) {
				$scope.loading = false;
				$scope.fileURL = data.image;
				delete data.image;
				$state.go("banners",{reload: true});
			});
		}
	};

	if(!Add){
		$scope.banner = BannersService.resource.get( { id:$stateParams.id },function(data){
			$scope.fileURL = data.image;
			delete data.image;
	        return data;
	    });		
	}

})









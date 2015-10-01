angular.module('controller.home',[])

.controller("HomeCtrl",function($rootScope,$scope,$state,$stateParams,$http){

	$scope.name = "";

	$scope.submitForm = function(form){
		console.log(form.$valid);
	};

})
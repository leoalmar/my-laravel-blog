angular.module('services.banners', ['ngResource'])

.factory('BannersService', function ($resource,$http){

	var URL = "/admin/banners";

	var service = {};

	service.resource = $resource(URL+'/:id', { id: '@_id' }, {
		/*
		query: {
			method: 'GET', 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		},
		*/
		save: {
			method: 'POST', 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		},
		update: {
			method: 'PUT', 
		    params: {id: '@id'}, 
		    headers: {'Content-Type': 'multipart/form-data'}
		}
	});

	service.saveOrder = function(orders) {
		return $http.post(URL + '/order', orders).then(function (status) {
			return status.data;		
		});
	};	

	

	return service;
})









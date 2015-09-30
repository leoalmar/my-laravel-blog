angular.module('services.news', ['ngResource'])

.factory('NewsService', function ($resource,$http){

	var URL = "/admin/news";

	var service = {};

	service.resource = $resource(URL+'/:id', { id: '@_id' }, {
		query: {
			method: 'GET', 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		},
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

	return service;

})

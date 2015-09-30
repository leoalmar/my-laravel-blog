angular.module('services.quests', ['ngResource'])

.factory('QuestsService', function ($resource,$http){

	var URL = "/admin/quests";

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

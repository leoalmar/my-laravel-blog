angular.module('services.roles', ['ngResource'])

.factory('RolesService', function ($resource){

	var URL = "/admin/roles";

	var service = {};

	service.resource = $resource(URL+'/:id', { id: '@_id' }, {
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

angular.module('services.permissions', ['ngResource'])

.factory('PermissionsService', function ($resource,$http){

	var URL = "/admin/permissions";

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

	service.saveGroup = function(user_id,group_id,action) {
		
		return $http.put(URL + '/' + user_id, { group_id : group_id, action : action }).then(function (status) {
			return status.data;		
		});
	};	

	return service;
})
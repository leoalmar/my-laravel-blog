angular.module('services.users', ['ngResource'])

.factory('UsersService', function ($resource,$http){

	var URL = "/admin/users";

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

	service.logout = function() {
		return $http.get('/admin/logout');
	};

	service.authenticate = function(user) {
		return $http.post('/admin/authenticate', user);
	};

	service.check = function() {
		return $http.get('/admin/check', {});
	};

	return service;

})

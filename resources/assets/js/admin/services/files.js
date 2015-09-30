angular.module('services.files', ['ngResource'])

.factory('FilesService', function ($resource,$http){

	var URL = "/admin/files";

	var service = {};

	service.resource = $resource(URL+'/:id', { id: '@_id' }, {
		query: {
			method: 'GET', 
		    params: {type:'@type', id: '@id'}, 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		},
		show: {
			method: 'POST', 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		}
		/*,
		update: {
			method: 'PUT', 
		    params: {id: '@id'}, 
		    headers: {'Content-Type': 'multipart/form-data'}
		}*/
	});

	service.update = function(file) {
		return $http.put(URL + "/" + file.id, file);
	};	

	return service;
})









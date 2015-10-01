angular.module('factories.general',[])

.factory('HttpInterceptor',function($q,$location) {
    return {
        request: function(config) {
            // do something on success
            return config;
        },
        response: function(response) {
            // do something on success
            return response;
        },
        'responseError': function(rejection) {
            // do something on error
            if(rejection.status === 401){
                $location.path('/login');                    
            }
            return $q.reject(rejection);
         }
    };
})

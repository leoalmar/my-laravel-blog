angular.module('factories.general',[])

.factory('HttpInterceptor',function($q,$rootScope) {
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
                $rootScope.$state.go('login');         
            }
            return $q.reject(rejection);
         }
    };
})

.factory("fileReader", function($q, $log){
 
    var onLoad = function(reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.resolve(reader.result);
            });
        };
    };

    var onError = function (reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.reject(reader.result);
            });
        };
    };

    var onProgress = function(reader, scope) {
        return function (event) {
            scope.$broadcast("fileProgress",
                {
                    total: event.total,
                    loaded: event.loaded
                });
        };
    };

    var getReader = function(deferred, scope) {
        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        reader.onprogress = onProgress(reader, scope);
        return reader;
    };

    var readAsDataURL = function (file, scope) {
        var deferred = $q.defer();
         
        var reader = getReader(deferred, scope);   

        reader.readAsDataURL(file);
         
        return deferred.promise;
    };

    return {
        readAsDataUrl: readAsDataURL  
    };
})

angular.module('filters.general',[])

.filter("url",function(){
	return function(input){


		return input;
	};
});
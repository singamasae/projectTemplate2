/**
 * 
 */
'use strict';
angular.module('app').factory('MainServices', [ '$resource', '$http', 'propertiesConstant', function($resource, $http, propertiesConstant) {
	var service = {
		login : function(master) {
			return $http.post(propertiesConstant.BASE_URL + '/login', master);
		}
	};
	return service;
} ]);

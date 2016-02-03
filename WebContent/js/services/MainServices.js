/**
 * 
 */
'use strict';
angular.module('app').factory('MainServices', [ '$resource', '$http', 'propertiesConstant', function($resource, $http, propertiesConstant) {
	var service = {
		login : function(master) {
			return $http.post('/projectTemplate2/user/authenticate', master);
		},
		logout : function() {
			return $http.post('/projectTemplate2/logout');
		}
	};
	return service;
} ]);

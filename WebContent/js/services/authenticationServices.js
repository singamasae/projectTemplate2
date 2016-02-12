/**
 * 
 */
'use strict';
angular.module('app').factory('authenticationServices', [ '$http', 'propertiesConstant', function($http, propertiesConstant) {
	var service = {
		login : function(master) {
			return $http.post(propertiesConstant.BASE_URL + '/user/authenticate', master);
		},
		logout : function() {
			return $http.post(propertiesConstant.BASE_URL + '/logout');
		},
		change : function(passwd) {
			return $http.put(propertiesConstant.API_URL + '/user/passwd?currentPasswd=' + passwd.current + '&newPasswd=' + passwd.newx + '&renewPasswd=' + passwd.renew);
		}
	};
	return service;
} ]);
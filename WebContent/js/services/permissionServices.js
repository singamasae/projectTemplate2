/**
 * 
 */
'use strict';
angular.module('app').factory('permissionServices', [ '$rootScope', '$resource', 'propertiesConstant', function($rootScope, $resource, propertiesConstant) {
	var permissionList = {};
	var service = {
		master : $resource(propertiesConstant.API_URL + '/user/:module', {}, {
			query : {
				method : 'GET',
				isArray : true
			}
		}),
		get : function(params, callback) {
			return this.master.query(params, callback);
		},
		setPermissions : function(permissions) {
			permissionList = permissions;
			//console.log('permissions broadcasting...');
			$rootScope.$broadcast('permissionsChanged');
		},
		hasPermission : function(permission) {
			permission = permission.trim();

			return _.some(permissionList, function(item) {
				return item.code.trim() === permission;
			});

		}
	};
	return service;

} ]);
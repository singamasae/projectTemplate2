/**
 * 
 */
'use strict';
angular.module('app').controller('DashboardController',
		[ '$scope', '$state', 'authenticationServices', 'permissionServices', function($scope, $state, authenticationService, permissionServices) {

			$scope.logout = function() {
				authenticationService.logout().success(function(data, status, headers, config) {
					$scope.notAuthenticated = true;
					$state.go('login');
				}).error(function(data, status, headers, config) {
					$scope.notAuthenticated = false;
				});

			};

			permissionServices.get({
				module : 'menu'
			}, function(data) {
				// console.log('permissions start');
				permissionServices.setPermissions(data);
				// console.log('permissions end');
			});

		} ]);
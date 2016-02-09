/**
 * 
 */
'use strict';
angular.module('app').controller('DashboardController', [ '$scope', '$state', 'authenticationServices', function($scope, $state, authenticationService) {
	$scope.logout = function() {
		authenticationService.logout().success(function(data, status, headers, config) {
			$scope.notAuthenticated = true;
			$state.go('login');
		}).error(function(data, status, headers, config) {
			$scope.notAuthenticated = false;
		});
		$state.go('login');
	};
} ]);
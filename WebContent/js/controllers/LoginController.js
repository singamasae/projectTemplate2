/**
 * 
 */
'use strict';
angular.module('app').controller('LoginController', [ '$scope', '$state', 'authenticationServices', function($scope, $state, authenticationService) {
	var busy = false;
	$scope.login = function(user) {
		busy = true;
		authenticationService.login(user).success(function(data, status, headers, config) {
			busy = false;
			$scope.notAuthenticated = false;
			$state.go('dashboard.home');
		}).error(function(data, status, headers, config) {
			busy = false;
			$scope.notAuthenticated = true;
			$scope.errorMessage = 'Invalid user name or password';
		});

	};

	$scope.loading = function() {
		return busy;
	};
} ]);
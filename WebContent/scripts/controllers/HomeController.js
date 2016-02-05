'use strict';

angular.module('app').controller('HomeController', [ '$scope', '$uibPosition', 'authenticationServices' ], function($scope, $uibPosition, authenticationServices) {
	$scope.logout = function() {

		authenticationService.logout().success(function(data, status, headers, config) {
			$scope.notAuthenticated = true;
			$state.go('login');
		}).error(function(data, status, headers, config) {
			$scope.notAuthenticated = false;
		});
	};
});

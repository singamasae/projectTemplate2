angular.module('app').controller(
		'LoginController',
		[ '$scope', '$state', '$stateParams', '$filter', '$uibModal', 'propertiesConstant', 'MainServices',
				function($scope, $state, $stateParams, $filter, $uibModal, propertiesConstant, MainServices) {
					$scope.login = function(user) {
						MainServices.login(user).success(function(data, status, headers, config) {

						}).error(function(data, status, headers, config) {

						});

					};

				} ]);

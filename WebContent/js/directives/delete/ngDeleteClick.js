/**
 * 
 */
'use strict';
angular.module('app').directive('ngDeleteClick', [ '$uibModal', function($uibModal) {

	var DeleteController = function($scope, $uibModalInstance) {
		$scope.remove = function() {
			$uibModalInstance.close();
		};

		$scope.close = function() {
			$uibModalInstance.dismiss('close');
		};
	};

	return {
		restrict : 'A',
		scope : {
			ngDeleteClick : "&",
			master : "="
		},
		link : function(scope, element, attrs) {
			element.bind('click', function() {
				var modalInstance = $uibModal.open({					
					templateUrl : 'js/directives/delete/delete-click.html',
					controller : DeleteController
				});

				modalInstance.result.then(function() {
					scope.ngDeleteClick({
						master : scope.master
					});
				}, function() {

				});
			});

		}
	};

} ]);
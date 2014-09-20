angular.module( 'symantis.global.modals', [

])
.controller( 'LoginModalCtrl', function LoginModalController($scope, $modalInstance){

	$scope.ok = function () {
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

});
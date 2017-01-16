angular.module('cf')

.controller('AppController', function ($rootScope, $mdSidenav, $mdMedia, $state, Users) {
	$rootScope.title = "Home";
	$rootScope.$mdMedia = $mdMedia;
	
	var ctrl = this;

	ctrl.toggleNav = function () {
		$mdSidenav('left').toggle();
	}

	ctrl.logout = function () {
		Users.logout();
		$state.go('blank.login');
	}
})
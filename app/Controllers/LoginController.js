angular.module('cf')

.controller('LoginController', function ($rootScope, $mdDialog, $state, Users) {
	$rootScope.title = "Login";
	
	var ctrl = this;

	ctrl.user = {};

	ctrl.login = function (ev) {
		Users.ready(function () {
			if(Users.authenticate(ctrl.user.username, ctrl.user.password)) {
				$state.go('cf.home');
			} else {
				$mdDialog.show(
					$mdDialog.alert()
						.title('Login Failed')
						.textContent('The username and/or password was not valid.')
						.ok('Okay!')
						.targetEvent(ev)
				);
			}
		})
	}
})
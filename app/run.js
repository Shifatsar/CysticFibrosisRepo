angular.module('cf')

.run(function ($rootScope, $state, Users) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams){
		if (toState.name != "blank.login") {
			if (user = Users.getAuthenticatedUser()) {
				if (!angular.isDefined($rootScope.user)) {
					$rootScope.user = user;
				}
			} else {
				event.preventDefault();
				$state.go('blank.login');
			}
		} else {
			if (Users.getAuthenticatedUser()) {
				event.preventDefault();
				$state.go('cf.home');
			}
		}
	});
});
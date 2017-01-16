angular.module('cf')

.service('Users', function ($http, $filter, $cookies) {
	var users = undefined;
	var q = [];

	$http.get('./data/users.json').then(function (data) {
		if (angular.isDefined(data)) {
			users = data.data;
			callWaitingCommands();
		}
	});

	function callWaitingCommands() {
		angular.forEach(q, function (func) {
			func();
		})	
	}

	return {
		ready: function (func) {
			if (typeof users === 'undefined') {
				q.push(func);
			} else {
				func();
			}
		},

		getAllUsers: function () {
			return users;
		},

		authenticate: function (username, password) {
			user = $filter('filter')(users, {username: username, password: password}, true)[0];

			if (angular.isDefined(user)) {
				$cookies.put('authenticatedUser', JSON.stringify(user));
				return true;
			}

			return false;
		},

		getAuthenticatedUser: function () {
			try {
				return JSON.parse($cookies.get('authenticatedUser'));
			} catch (error) {
				return false;
			}
		},

		logout: function function_name(argument) {
			$cookies.remove('authenticatedUser');
		}
	}
})
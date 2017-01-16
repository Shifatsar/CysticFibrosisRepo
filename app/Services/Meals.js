angular.module('cf')

.service('Meals', function ($http, $filter) {
	var meals = undefined;
	var q = [];

	$http.get('./data/meals.json').then(function (data) {
		if (angular.isDefined(data)) {
			meals = data.data;
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
			if (typeof meals === 'undefined') {
				q.push(func);
			} else {
				func();
			}
		},

		getAll: function () {
			return meals;
		},

		save: function (meal) {
			meals.push(meal);
		},

		remove: function (meal) {
			meals.splice(meals.indexOf(meal), 1);
		}
	}

})
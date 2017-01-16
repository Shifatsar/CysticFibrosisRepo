angular.module('cf')

.service('Visits', function ($http, $filter) {
	var visits = undefined;
	var q = [];

	$http.get('./data/clinical-visits.json').then(function (data) {
		if (angular.isDefined(data)) {
			visits = data.data;
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
			if (typeof visits === 'undefined') {
				q.push(func);
			} else {
				func();
			}
		},

		getAll: function () {
			return visits;
		},

		save: function (visit) {
			visits.push(visit);
		},

		remove: function (visit) {
			visits.splice(visits.indexOf(visit), 1);
		}
	}

})
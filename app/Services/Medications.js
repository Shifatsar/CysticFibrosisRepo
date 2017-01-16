angular.module('cf')

.service('Medications', function ($http, $filter) {
	var medications = undefined;
	var q = [];

	$http.get('./data/medications.json').then(function (data) {
		if (angular.isDefined(data)) {
			medications = data.data;
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
			if (typeof medications === 'undefined') {
				q.push(func);
			} else {
				func();
			}
		},

		getAll: function () {
			return medications;
		},

		save: function (medication) {
			medications.push(medication);
		},

		remove: function (medication) {
			medications.splice(medications.indexOf(medication), 1);
		}
	}

})
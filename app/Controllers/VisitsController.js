angular.module('cf')

.controller('VisitsController', function (Visits, $rootScope, $scope, $mdDialog) {
	$rootScope.title = "Visits";
	
	var ctrl = this;
	ctrl.visits = [];

	Visits.ready(function () {
		ctrl.visits = Visits.getAll();
	});

	ctrl.add = function (ev) {
		$mdDialog.show({
			templateUrl: './app/templates/Dialogs/Visits.html',
			targetEvent: ev,
			scope: $scope.$new(),
			clickOutsideToClose: true
		});
	}

	ctrl.cancel = function () {
		$mdDialog.cancel();
	}

	ctrl.delete = function (visit) {
		Visits.ready(function () {
			Visits.remove(visit);
		});
	}

	ctrl.store = function (visit) {
		Visits.ready(function () {
			Visits.save(visit);
			$mdDialog.hide();
		});
	}
})
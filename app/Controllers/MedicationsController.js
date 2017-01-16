angular.module('cf')

.controller('MedicationsController', function (Medications, $rootScope, $scope, $mdDialog) {
	$rootScope.title = "Medications";
	
	var ctrl = this;
	ctrl.medications = [];

	Medications.ready(function () {
		ctrl.medications = Medications.getAll();
	});

	ctrl.add = function (ev) {
		$mdDialog.show({
			templateUrl: './app/templates/Dialogs/Medications.html',
			targetEvent: ev,
			scope: $scope.$new(),
			clickOutsideToClose: true
		});
	}

	ctrl.cancel = function () {
		$mdDialog.cancel();
	}

	ctrl.delete = function (medication) {
		Medications.ready(function () {
			Medications.remove(medication);
		});
	}

	ctrl.store = function (medication) {
		medication.taken = medication.taken ? "yes" : "no";
		Medications.ready(function () {
			Medications.save(medication);
			$mdDialog.hide();
		});
	}
})
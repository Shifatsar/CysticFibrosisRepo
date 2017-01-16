angular.module('cf')

.controller('MealsController', function (Meals, $rootScope, $scope, $mdDialog) {
	$rootScope.title = "Meals";
	
	var ctrl = this;
	ctrl.meals = [];

	Meals.ready(function () {
		ctrl.meals = Meals.getAll();
	});

	ctrl.add = function (ev) {
		$mdDialog.show({
			templateUrl: './app/templates/Dialogs/Meals.html',
			targetEvent: ev,
			scope: $scope.$new(),
			clickOutsideToClose: true
		});
	}

	ctrl.cancel = function () {
		$mdDialog.cancel();
	}

	ctrl.delete = function (meal) {
		Meals.ready(function () {
			Meals.remove(meal);
		});
	}

	ctrl.store = function (meal) {
		Meals.ready(function () {
			Meals.save(meal);
			$mdDialog.hide();
		});
	}
})
angular.module('cf')

.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('cf', {
			abstract: true,
			templateUrl: './app/templates/cf-layout.html'
		})

		.state('blank', {
			abstract: true,
			templateUrl: './app/templates/blank-layout.html'
		})

		.state('blank.login', {
			url: '/login',
			templateUrl: './app/templates/login.html',
			controller: 'LoginController as ctrl'
		})

		.state('cf.home', {
			url: '/',
			templateUrl: './app/templates/home.html'
		})

		.state('cf.about', {
			url: '/about',
			templateUrl: './app/templates/about.html'
		})

		.state('cf.meals', {
			url: '/meals',
			templateUrl: './app/templates/meals.html',
			controller: "MealsController as ctrl"
		})

		.state('cf.exercise', {
			url: '/exercise',
			templateUrl: './app/templates/exercise.html'
		})

		.state('cf.hospitalization', {
			url: '/hospitalization',
			templateUrl: './app/templates/hospitalization.html'
		})

		.state('cf.clinicalVisits', {
			url: '/clinical-visits',
			templateUrl: './app/templates/clinical-visits.html',
			controller: "VisitsController as ctrl"
		})

		.state('cf.medications', {
			url: '/medications',
			templateUrl: './app/templates/medications.html',
			controller: "MedicationsController as ctrl"
		});

	$urlRouterProvider.otherwise('/');
})
angular.module('cf')

.config(function ($mdThemingProvider) {
	$mdThemingProvider
		.theme('default')
			.primaryPalette('red')
		    .accentPalette('orange');

    $mdThemingProvider
        .theme('sideNav')
        .primaryPalette('grey')
        .backgroundPalette('red', {
            'hue-1': '900'
        });

    $mdThemingProvider
        .theme('sideNavToolbar')
        .primaryPalette('grey')
        .backgroundPalette('grey', {
            'hue-1': '50'
        });
})
function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController as vm'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'app/settings/settings.html'
        });

    $urlRouterProvider.otherwise('/');
}

export default routerConfig;

(function() {
    angular.module('app', [
        'ngRoute',
        'ngResource',
        'ui.bootstrap',
        'app.common.modal',
        'app.customer',
        'app.uibmodal'
    ])
    .config(AppConfig);

    AppConfig.$inject = ['$routeProvider', '$locationProvider'];

    function AppConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/welcome/index.html'
            })
            .when('/customer', {
                templateUrl: '/app/customer/customer.html',
                controller: 'CustomerCtrl',
                controllerAs: 'customer'
            })
            .when('/uibmodal', {
                templateUrl: '/app/uibmodal/index.html',
                controller: 'UIBModalCtrl',
                controllerAs: 'uidm'
            });

        $locationProvider.html5Mode(true);
    }
})();
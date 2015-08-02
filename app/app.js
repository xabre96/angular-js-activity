var app = angular.module('customersApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('customers',
                    {
                        controller: 'customersController',
                        templateUrl: '/app/partials/customers.html'
                    })
            .when('/customerorders/:customerID',
                    {
                        controller: 'customerOrdersController',
                        templateUrl: '/app/partials/customerOrders.html'
                    })
            .when('/orders',
                    {
                        controller: 'ordersController',
                        templateUrl: '/app/partials/orders.html'
                    })
            .otherwise({redirectTo: '/customers'});
});
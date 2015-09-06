/**
 * Created by rohitagarwal on 7/13/15.
 */
(function(){

    var app=angular.module('app',['ngRoute','angularUtils.directives.dirPagination']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl : 'templates/home.html',
                controller : 'homeController'
            })
            .when('/sale', {
                templateUrl : 'templates/specialSales.html',
                controller : 'saleController'
            })
            .when('/faq', {
                templateUrl : 'templates/faq.html'

            })
            .when('/contactus', {
                templateUrl : 'templates/contactus.html',
                controller:'contactusController'

            })
            .when('/feedback', {
                templateUrl : 'templates/feedback.html',
                controller : 'feedbackController'

            })
            .when('/products/:productId', {
                templateUrl : 'templates/productDetailsTemplate.html'
//                controller : 'productsDetailsController'
            })
            .otherwise({
                redirectTo : 'home'
            });
    });

}());
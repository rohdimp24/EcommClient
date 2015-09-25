/**
 * Created by rohitagarwal on 9/22/15.
 */
/**
 * Created by rohitagarwal on 8/22/15.
 */
(function(){

    angular.module('app').controller('testController',["$scope","dataServiceFactory",function($scope,dataServiceFactory){

        $scope.items="";


        $scope.getProducts=function(){

            //if the call is a

            dataServiceFactory.getTestProducts()
                .then(
                function(event){
                    $scope.items=event;
                },

                function(statusCode){
                    console.log(statusCode);
                    $scope.loading=false;

                }
            )
        }

        $scope.getProducts();




//    $scope.meals = [];
//
//    var dishes = [
//        'noodles',
//        'sausage',
//        'beans on toast',
//        'cheeseburger',
//        'battered mars bar',
//        'crisp butty',
//        'yorkshire pudding',
//        'wiener schnitzel',
//        'sauerkraut mit ei',
//        'salad',
//        'onion soup',
//        'bak choi',
//        'avacado maki'
//    ];
//    var sides = [
//        'with chips',
//        'a la king',
//        'drizzled with cheese sauce',
//        'with a side salad',
//        'on toast',
//        'with ketchup',
//        'on a bed of cabbage',
//        'wrapped in streaky bacon',
//        'on a stick with cheese',
//        'in pitta bread'
//    ];
//    for (var i = 1; i <= 100; i++) {
//        var dish = dishes[Math.floor(Math.random() * dishes.length)];
//        var side = sides[Math.floor(Math.random() * sides.length)];
//        $scope.meals.push('meal ' + i + ': ' + dish + ' ' + side);
//    }

    }]);
}())
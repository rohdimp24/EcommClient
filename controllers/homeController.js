/**
 * Created by rohitagarwal on 8/22/15.
 */
(function(){

    angular.module('app').controller('homeController',["$scope","dataServiceFactory",function($scope,dataServiceFactory){

        $scope.items="";

        $scope.name="rohit";
        $scope.pages=[];
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.loading=false;


        $scope.getProducts=function(){
            $scope.loading=true;

            //if the call is a

            dataServiceFactory.getProducts()
                .then(
                function(event){
                    $scope.items=event;
//                    var totalItems=event.data.length;
//                    var numPages=Math.ceil(event.data.length/10);
//                    $scope.pages = [];
//
//                    for (var i = 1; i <= numPages; i++) {
//                        $scope.pages.push(i);
//                    }
                    $scope.loading=false;

                },

                function(statusCode){
                    console.log(statusCode);
                    $scope.loading=false;

                }
            )
        }

        $scope.getProducts();


      $scope.pageChangeHandler=function(newPageNumber){
          console.log("Changesd the page to "+newPageNumber);
      }



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
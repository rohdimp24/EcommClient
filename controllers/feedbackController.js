/**
 * Created by rohitagarwal on 8/27/15.
 */
(function(){

    angular.module('app').controller('feedbackController',["$scope","dataServiceFactory",function($scope,dataServiceFactory){


        $scope.feedbacks='';
        $scope.currentPage = 1;
        $scope.pageSize = 100;
        $scope.loading=false;
        $scope.feedbackType='iconPos.gif';

        $scope.getFeedbacks=function(){
            $scope.loading=true;
            dataServiceFactory.getFeedbacks()
                .then(
                function(event){
                    $scope.feedbacks=event;
                    $scope.loading=false;

                },

                function(statusCode){
                    console.log(statusCode);
                    $scope.loading=false;

                })

        }

        $scope.pageChangeHandler=function(){
            console.log("page changed");
        }

        $scope.getFeedbacks();




     }]);

}())
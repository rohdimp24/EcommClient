/**
 * Created by rohitagarwal on 7/13/15.
 */
(function(){

   angular.module('app').controller('mainController',["$scope","dataServiceFactory","$interval",function($scope,dataServiceFactory,$interval){


       $scope.name="rohit";
       $scope.status='';
       $scope.methodName='';
       $scope.injectionTime='';
       $scope.totalExpTime='';
       $scope.startRefreshCountdownTime=1;




//       if(promise)
//       {
//           $interval.cancel(promise);
//           $scope.countdown=10000;
//       }

        $scope.configureServer=function(){
            dataServiceFactory.configureServer($scope.methodName,$scope.injectionTime,$scope.totalExpTime)
                .then(
                function(event){
                    $scope.status="Server configured sucessfully to " + event.data;
                },

                function(statusCode){
                    alert(statusCode);
                }
            )

        }

       $scope.raisePeak=function(){
           dataServiceFactory.raisePeak()
               .then(
               function(event){
                   $scope.status="Peak is raised";

               },

               function(statusCode){
                   alert(statusCode);
               }
           )

       }

       $scope.stopServer=function(){
            dataServiceFactory.stopServer()
                .then(
                    function(event){
                        $scope.status="Server is Stopped";
                     },

                    function(statusCode){
                        alert(statusCode);
                    }
                )
       }

       $scope.resetServer=function(){
           dataServiceFactory.resetServer($scope.injectionTime,$scope.totalExpTime)
               .then(
               function(event){
                   $scope.status="Server is Reset to "+event.data;
               },

               function(statusCode){
                   alert(statusCode);
               }
           )

       }

       $scope.startServer=function(){
           if($scope.injectionTime=='')
               $scope.injectionTime=10;
           if($scope.totalExpTime=='')
               $scope.totalExpTime=1000;

           dataServiceFactory.resetServer($scope.injectionTime,$scope.totalExpTime)
               .then(
               function(event){
                   $scope.status="Server is Reset to "+event.data;
               },

               function(statusCode){
                   alert(statusCode);
               }
           )

       }

       $scope.getData=function(){
           dataServiceFactory.getData()
               .then(
               function(event){
                   var jsonData=angular.fromJson(event.data);
                   $scope.dataPoint="x="+jsonData.chartX+",y="+jsonData.chartY;
                   $scope.timeRemaining="Time Remaining="+jsonData.timeRemaining;
                   $scope.peakDetected="Peak Detected="+jsonData.isPeak;

                   // startCountdown();
                   $scope.countdown=$scope.startRefreshCountdownTime;
                   startCountdown();

               },

               function(statusCode){
                   alert(statusCode);
               }
           )

       }






       var promise=null;
       $scope.countdown=$scope.startRefreshCountdownTime;

       $scope.updated=1;
       //decrement the countdown. and then when the counter is 0 automatic search
       var decrementCountdown=function(){
           $scope.countdown -=1;


           if($scope.countdown < 1)
           {
               $scope.getData();
               //$scope.status=$scope.startRefreshCountdownTime;
           }
       }

       var startCountdown=function(){
           promise= $interval(decrementCountdown,1000,$scope.countdown);
       }

       startCountdown();


   }]);





}())
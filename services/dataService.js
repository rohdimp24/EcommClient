/**
 * Created by rohitagarwal on 7/13/15.
 */

(function(){

    angular.module('app').factory('dataServiceFactory',function($http,$q){

        var serverPrefix='http://localhost:8888/MygannAngularClient/ECommServer';

        function getProducts(){
            var deferred = $q.defer();

            return $http.get(serverPrefix+'/GetTopSellingItems.php')
                .success(function(response){
                    console.log("get data");
                    deferred.resolve(response);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });
            return deferred.promise;


        }


        function getUnsoldProducts(){
            var deferred = $q.defer();

            return $http.get(serverPrefix+'/GetTopUnsoldItems.php')
                .success(function(response){
                    console.log("get unsold products");
                    deferred.resolve(response);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });
            return deferred.promise;

        }

        function getFeedbacks(){
            var deferred = $q.defer();

            return $http.get(serverPrefix+'/GetRecentFeedbacks.php')
                .success(function(response){
                    console.log("get feedbacks");
                    deferred.resolve(response);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });
            return deferred.promise;
        }


        function sendmail(username,email,message,isCopySend){
            var deferred = $q.defer();
            var payload = 'username=' + username+'&from=' + email+'&message='+message;
            var config = {
                headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
            }

            return $http.post(serverPrefix+'/mail.php',payload,config)
                .success(function(response){
                    console.log("send mail");
                    deferred.resolve(response);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });
            return deferred.promise;

        }

        function getData(){
            var deferred = $q.defer();
            return $http.get(serverPrefix+'/getData')
                .success(function(response){
                    console.log("reset server");
                    deferred.resolve(response);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });
            return deferred.promise;

        }

        return{
            getProducts:getProducts,
            getUnsoldProducts:getUnsoldProducts,
            getFeedbacks:getFeedbacks,
            sendmail:sendmail

        }




    })




}())
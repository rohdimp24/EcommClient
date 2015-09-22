/**
 * Created by rohitagarwal on 7/13/15.
 */

(function(){

    angular.module('app').factory('dataServiceFactory',function($http,$q,$cacheFactory){

        var serverPrefix='http://localhost:8888/MygannAngularClient/ECommServer';
        //currently the data cache is being implemented as the cachefactory..but I suppose we should be able to change it
        var dataCache = $cacheFactory.get('dataCache');
        if (!dataCache) {
            dataCache = $cacheFactory('dataCache');
        }


        function getProducts(){
            var deferred = $q.defer();

            var topSellingItemsFromCache = dataCache.get('topSellingItems');
            if (topSellingItemsFromCache) {
                console.log('returning topSellingItemsFromCache from cache');
                deferred.resolve(topSellingItemsFromCache);
            }
            else{
             $http.get(serverPrefix+'/GetTopSellingItems.php')
                .success(function(response){
                    console.log("get data");
                    dataCache.put('topSellingItems',response);
                    deferred.resolve(response);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });
            }
            return deferred.promise;


        }


        function getUnsoldProducts(){
            var deferred = $q.defer();
            var topUnsoldItemsFromCache = dataCache.get('topUnsoldItems');
            if (topUnsoldItemsFromCache) {
                console.log('returning topUnsoldItemsFromCache from cache');
                deferred.resolve(topUnsoldItemsFromCache);
            }
            else{
                 $http.get(serverPrefix+'/GetTopUnsoldItems.php')
                    .success(function(response){
                        console.log("get unsold products");
                        dataCache.put('topUnsoldItems',response);
                        deferred.resolve(response);
                    })
                    .error(function(reason){
                        deferred.reject(reason);
                    });
            }
            return deferred.promise;

        }

        function getFeedbacks(){
            var deferred = $q.defer();
            var topFeedbacksFromCache = dataCache.get('topFeedbacks');
            if (topFeedbacksFromCache) {
                console.log('returning topFeedbacksFromCache from cache');
                deferred.resolve(topFeedbacksFromCache);
            }
            else{
                $http.get(serverPrefix+'/GetRecentFeedbacks.php')
                    .success(function(response){
                        console.log("get feedbacks");
                        dataCache.put('topFeedbacks',response);
                        deferred.resolve(response);
                    })
                    .error(function(reason){
                        deferred.reject(reason);
                    });
            }
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


        function getTestProducts(){
            var deferred = $q.defer();

            var dataCache = $cacheFactory.get('topSellingCache');

            if (!dataCache) {
                dataCache = $cacheFactory('topSellingCache');
            }

            var topSellingItemsFromCache = dataCache.get('topSellingItems');

            if (topSellingItemsFromCache) {

                console.log('returning topSellingItemsFromCache from cache');
                deferred.resolve(topSellingItemsFromCache);

            }
            else{
                $http.get(serverPrefix+'/GetTopSellingItems.php')
                .success(function(response){
                    console.log("get unsold products");

                    dataCache.put('topSellingItems',response);
                    deferred.resolve(response);
                })
                .error(function(reason){
                    deferred.reject(reason);
                });
            }

            return deferred.promise;
        }

        return{
            getProducts:getProducts,
            getUnsoldProducts:getUnsoldProducts,
            getFeedbacks:getFeedbacks,
            sendmail:sendmail,
            getTestProducts:getTestProducts

        }




    })




}())
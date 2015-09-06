/**
 * Created by rohitagarwal on 8/28/15.
 */


    (function(){

        angular.module('app').filter('prettyDate',function(){

            return function(str){
                return moment(str).fromNow()
            }



        });






    }())
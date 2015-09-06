/**
 * Created by rohitagarwal on 8/24/15.
 */
(function(){

    angular.module('app').value("defaultLength",10);


    angular.module('app').filter('trimText',function(defaultLength){
            return function(bug,maxLength){
                if(maxLength==null)
                    maxLength=defaultLength;

                return bug.length>maxLength?bug.substr(0,maxLength)+"...":bug;
            }

    });




}())
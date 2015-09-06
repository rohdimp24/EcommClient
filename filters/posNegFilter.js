/**
 * Created by rohitagarwal on 9/3/15.
 */
(function(){

    angular.module('app').filter('posNegFilter',function(){

        return function(str){
            if(str==1)
            {
                return "images/iconPos.gif";
            }
            else if(str==0)
            {
                return "images/iconNeg.gif";
            }
            else
            return "images/iconNeu.gif";
        }



    });






}())
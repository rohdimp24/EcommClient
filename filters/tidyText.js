/**
 * Created by rohitagarwal on 8/24/15.
 */
(function(){

    angular.module('app').filter('tidyText',function(){

        return function(str){
            //need to chnage this code to replace all the occurence of the &quot;
            //return bug.replace('&quot;','\"')
            var find = '&quot;';
            var re = new RegExp(find, 'g');

            str = str.replace(re, '\"');
            return str;
        }



    });






}())
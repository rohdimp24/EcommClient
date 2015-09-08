/**
 * Created by rohitagarwal on 9/7/15.
 */
/**
 * Created by rohitagarwal on 9/3/15.
 */
(function(){

    angular.module('app').filter('discountFilter',function(){

        return function(price,discount){
           return price-price*(discount/100);
        }



    });






}())
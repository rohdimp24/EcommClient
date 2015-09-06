/**
 * Created by rohitagarwal on 9/3/15.
 */
(function(){

    angular.module('app').filter('scoreStarFilter',function(){

        return function(score){
            if(score>=1000)
            {
                return "images/iconRedStar.gif";
            }
            else if(score>499 && score<1000)
            {
                return "images/iconPurpleStar.gif";
            }
            else if(score>99 && score<=499)
            {
                return "images/iconTealStar.gif";
            }
            else if(score>49 && score<=99)
            {
                return "images/iconBlueStar.gif";
            }
            else
            {
                return "images/iconYellowStar.gif";
            }


        }



    });






}())
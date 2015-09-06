/**
 * Created by rohitagarwal on 9/1/15.
 */
(function(){

    angular.module('app').directive("loadingDirective",function(){

        return {

            templateUrl:"templates/loadingDirective.html",
            //template:"",
//            template:'<img src="{{item.thumbnail}}" />'+
//                    '<a href="{{item.itemUrl}}">{{item.title}}</a>'+
//                    '<span>{{item.sellingPrice}}$</span>'+
//                     '<span>{{item.sku}}</span>'+
//                     '<span>{{item.itemId}}</span>',
            restrict:"E",
            scope:{},
//            scope:{
//                loading:"@"  //this means that user is a variable that will be set by "user"
//                //else if we say initialCollapsed:"@" then the user will set the property initialCollapsed
//            },
//            controller:function($scope){
//              $scope.getImageSize=function(img){
//                  var tt=img.thumbnail;
//                  alert(img);
//              }
//            }

            link:function(scope,element,attr){

                //I guess this is the place where we have to tae care of the size details
//                scope.getImageSize=function(img){
//                  var tt=img.thumbnail;
//                  alert(element);
//              }

            }
        }






    })









}())
/**
 * Created by rohitagarwal on 9/7/15.
 */
(function(){

    angular.module('app').directive("salesDirective",function(){

        return {

            templateUrl:"templates/salesDesc.html",
            //template:"",
//            template:'<img src="{{item.thumbnail}}" />'+
//                    '<a href="{{item.itemUrl}}">{{item.title}}</a>'+
//                    '<span>{{item.sellingPrice}}$</span>'+
//                     '<span>{{item.sku}}</span>'+
//                     '<span>{{item.itemId}}</span>',
            restrict:"E",
            scope:{
                item:"="  //this means that user is a variable that will be set by "user"
                //else if we say initialCollapsed:"@" then the user will set the property initialCollapsed
            },
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

                //element.on('load', function() {
//                    var w = $(this).width(),
//                        h = $(this).height();
//
//                    alert(w+","+h);

                var imgElem=element.children()[1];
                console.log(imgElem.width+","+imgElem.height);

                imgElem.onload=function(){
                    //alert(this.width+","+this.height);
                    //var t=this;
                    if(this.height>190)
                        $(this).addClass('removeImage')

                }

                imgElem.onCreated=function(){

                    alert("inside oncreated");
                }



                imgElem.onloadend=function(){
                    alert("inside onloadend")
                }

                imgElem.onloadeddata=function(){
                    alert("inside on loaded data");
                }

//                    imgElem.on('load',function(){
//                        alert("hi");
//                    })
                // var div = elem.parent();

                //check width and height and apply styling to parent here.
                //});



            }
        }






    })









}())
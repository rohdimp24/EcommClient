/**
 * Created by rohitagarwal on 8/27/15.
 */
/**
 * Created by rohitagarwal on 8/27/15.
 */
(function(){

    angular.module('app').controller('contactusController',["$scope","dataServiceFactory","$interval",
        function($scope,dataServiceFactory,$interval){


        ///MAP STARTS////
        //the folllowing code for adding google map is from http://jsfiddle.net/pc7Uu/854/

        var mapOptions = {
            zoom: 17,
            center: new google.maps.LatLng(34.025499, -117.687754),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }


        var cities = [
            {
                city : 'Mygann',
                desc : '',
                lat : 34.025499,
                long : -117.687754
            }
            /*{
                city : 'New York',
                desc : 'This city is aiiiiite!',
                lat : 40.6700,
                long : -73.9400
            },
            {
                city : 'Chicago',
                desc : 'This is the second best city in the world!',
                lat : 41.8819,
                long : -87.6278
            },
            {
                city : 'Los Angeles',
                desc : 'This city is live!',
                lat : 34.0500,
                long : -118.2500
            },
            {
                city : 'Las Vegas',
                desc : 'Sin City...\'nuff said!',
                lat : 36.0800,
                long : -115.1522
            }*/
        ];


        for (i = 0; i < cities.length; i++){
            createMarker(cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }

        ///////MAP ENDS/////



        //send mail workflow

        $scope.sendMail=function(){
            alert("insed");
            dataServiceFactory.sendmail($scope.username,$scope.from,$scope.message,$scope.isCopySend)
                .then(
                function(event){
                    $scope.items=event.data;
                    var totalItems=event.data.length;
                    var numPages=Math.ceil(event.data.length/10);
                    $scope.pages = [];

                    for (var i = 1; i <= numPages; i++) {
                        $scope.pages.push(i);
                    }
                    $scope.loading=false;
                    //need to copy the bootstrap error toad

                },

                function(statusCode){
                    console.log(statusCode);
                    $scope.loading=false;

                }
            )
        }




    }]);

}())
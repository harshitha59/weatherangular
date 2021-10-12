var mod = angular.module('mymod',[])
mod.controller('mycntrl', function($scope, $http){
    $scope.search = function (){
$http.get('https://api.openweathermap.org/data/2.5/weather?q='+$scope.city+'&appid=5c9d06d901f34be2628ac1d9010c70b4')
.then(function(response){
    console.log(response.data)
    $scope.details = response.data
    
    var kelvin = $scope.details.main.temp
    console.log(kelvin)
    var value = kelvin-273.15;
    $scope.temp = value.toFixed(2);

    if($scope.temp < 10){
        document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherangular/snow.png')";
    } 
    else if($scope.temp > 10 && $scope.temp <= 15){
         document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherangular/fog.png')";
    } 
     if ($scope.temp > 15 && $scope.temp <= 20) {
        document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherangular/cooldrizzle.png')";
    }
    else if($scope.temp > 20 && $scope.temp <= 25){
        document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherangular/warm.png')";
         }
    if($scope.temp > 25 && $scope.temp <= 30)
    {
        document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherangular/warm.png')";
         
    }
    else if($scope.temp > 30){
        document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherangular/veryhotfull.png')";
         }
})
    }
})
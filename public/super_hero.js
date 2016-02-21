var app = angular.module("super", []);

app.controller("hero", ["$scope,", "$http", function($scope, $http){
  $scope.heroes = [];

  $scope.heroName = "";
  $scope.superPower = "";

  $scope.getHeroes = function(){
    $http({
      "method": "GET",
      "url": "/hero"
    }).then(function(res){
      $scope.heroes = res.data;
    })
  }
  $scope.getHeroes();

  $scope.submitHero = function() {
    $http({
      "method": "POST",
      "url": "/hero",
      "data":{
        "hero": $scope.heroName
        "powers": $scope.superPower
      }
    }).then(function(){
      $scope.getHeroes();
      $scope.heroName = "";
      $scope.superPower = "";
    })
  }

}]);

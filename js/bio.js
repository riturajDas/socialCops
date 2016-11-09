"use strict"
//fetch information fom cric api on Sachin for bio section
app.controller("bioCtrl", function($scope, $http) {//angular controller
  $http.get("http://cricapi.com/api/playerStats?pid=35320")//asyncronous request to api
  .then(function(res) {//response data
    var objSachin = res.data;//response data -> object format
    //console.log(objSachin);//test
    //put data into model via $scope
    $scope.full_name = objSachin.fullName;
    $scope.ind = objSachin.country;
    $scope.image = objSachin.imageURL;
    $scope.bio = objSachin.profile;
    $scope.bowling = objSachin.bowlingStyle;
    $scope.batting = objSachin.battingStyle;
    $scope.role = objSachin.playingRole;
    $scope.dob = objSachin.born;
  });
});

/**
 * Created by levent on 17.02.2015.
 */

//http://localhost:8080/person/list

angular.module("lyModuleName", [])
    .controller("lyController", function ($scope, $http) {

        $scope.message = "here is message...";
        $scope.lists = [];

        $http.get("http://www.w3schools.com//website/Customers_JSON.php")
            .success(function (response) {
                $scope.lists = (response);
            })


    })
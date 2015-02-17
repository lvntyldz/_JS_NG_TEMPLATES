/**
 * Created by levent on 17.02.2015.
 */

//http://localhost:8080/person/list

angular.module("lyModuleName", [])
    .controller("lyController", function ($scope, $http) {

        $scope.message = "here is message...";
        $scope.lists = [{
            "email": "aaaa@aaa.aaaa",
            "firstname": "aa",
            "lastname": "aaa",
            "id": 0
        },
            {
                "email": "bbbb@bb.cc",
                "firstname": "bb",
                "lastname": "bbb",
                "id": 1
            },
            {
                "email": "dddd@bb.cc",
                "firstname": "dd",
                "lastname": "dddd",
                "id": 2
            },
            {
                "email": "eeee@bb.cc",
                "firstname": "ee",
                "lastname": "eeee",
                "id": 3
            },
            {
                "email": "ffff@bb.cc",
                "firstname": "ff",
                "lastname": "ffff",
                "id": 4
            },
            {
                "email": "ggggg@bb.cc",
                "firstname": "gg",
                "lastname": "gggg",
                "id": 5
            }];


        $scope.removePerson = function (idx) {
            $scope.lists.splice(idx, 1);
        }


        $scope.editPerson = function (idx) {

            $scope.lists.splice(idx, 1);
        }


    })
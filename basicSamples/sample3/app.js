/**
 * Created by levent on 17.02.2015.
 */

//ilk parametre  module adı = lyModuleName
//ikinci parametre dependency  = [] //null array
angular.module("lyModuleName", [])

    //controller adı = ListController
    .controller("ListController", function ($scope) {

        $scope.lists = []; // boş liste oluştur

        //lists'i doldur
        $scope.lists.push("Ali");
        $scope.lists.push("Veli");
        $scope.lists.push("Durali");


    })
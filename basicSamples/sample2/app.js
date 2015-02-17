/**
 * Created by levent on 17.02.2015.
 */

//ilk parametre  module adı = lyModuleName
//ikinci parametre dependency  = [] //null array
angular.module("lyModuleName", [])

    //controller adı = ListController
    .controller("ListController", function ($scope) {

        $scope.lists = [{name: "ali"}, {name: "veli"}]; // boş liste oluştur


    })
/**
 * Created by levent on 17.02.2015.
 */

//ilk parametre  module adı = lyModuleName
//ikinci parametre dependency  = [] //null array
angular.module("lyModuleName", [])

    //controller adı = ListController
    .controller("lyController", function ($scope) {

        $scope.message1 = "This is  first message";

        var message2 = "This is second message";

        $scope.message2 = message2;

    })
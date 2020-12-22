const testingAngluarApp = angular.module('testingAngularApp', []);

testingAngluarApp.controller('testingAngularCtrl',  ($rootScope, $scope) => {

    $scope.title = "Testing AngularJS Applications";

});
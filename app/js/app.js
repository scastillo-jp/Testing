const testingAngluarApp = angular.module('testingAngularApp', []);

testingAngluarApp.controller('testingAngularCtrl', function($scope) {
    $scope.title = 'Testing AngularJS Applications';
    $scope.email = 'paul@gmail.com';

});

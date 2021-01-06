const testingAngluarApp = angular.module('testingAngularApp', []);

testingAngluarApp.controller('testingAngularCtrl', function($scope) {
    $scope.title = 'Testing AngularJS Applications';
    $scope.message = 'Holaa Mundo';
    const date = new Date();
});

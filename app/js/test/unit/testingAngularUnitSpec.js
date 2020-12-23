describe('Testing AngularJS Test Suite', function () {
  beforeEach(module('testingAngularApp'));

   describe('Testing AngularJS Controller', function () {
    var scope = {};
    var ctrl;

    beforeEach(
      inject(function ($controller) {
        ctrl = $controller('testingAngularCtrl', { $scope: scope });
      }));

    it('should initialize the title in the scope', function() {
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("Testing AngularJS Applications");
    });

    it('should check type of the input is number', function() {
      expect(scope.input_type).toBeDefined();
      expect(scope.input_type).toEqual("number");
    }) 
  });

});


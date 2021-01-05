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

    it('should validate that the length of the variable is 11', function() {
      expect(scope.message).toBeDefined();
      expect(scope.message.length).toBe(11);
    });

    it('should validate tha the increment() function add 1 to count', function() {
      spyOn(scope,"increment").and.callThrough();
      expect(scope.count).toBeDefined();
      expect(scope.count).toBe(0);
      scope.increment();
      expect(scope.increment).toHaveBeenCalled();
      expect(scope.count).toBe(1);
    });

  });

});


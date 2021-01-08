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

    it('test Arroba input', function(){
      expect(scope.email).toBeDefined();
      expect(scope.email).toContain("@");
      
    });

    it('test lista', function(){

      expect(scope.datos).toBeDefined();
      expect(scope.datos).toHaveSize(3);
      
    });

    

  });

});


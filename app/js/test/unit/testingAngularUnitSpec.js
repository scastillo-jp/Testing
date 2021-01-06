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


    it('should happen if the format is day month year', function() {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();

      const formatDate = currentDay + "/" + currentMonth +  "/" + currentYear;

      const formatDateArray = formatDate.split('/');

      console.log(formatDateArray);

      const ifCorrectDay = parseInt(formatDateArray[0]) > 31 ? true : false;

      const ifCorrectMonth = parseInt(formatDateArray[1]) > 12 ? true : false;

      expect(ifCorrectDay).toEqual(false);
      expect(ifCorrectMonth).toEqual(false);
    });


  });

});


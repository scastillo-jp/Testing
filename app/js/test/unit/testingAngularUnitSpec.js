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
    

    it('should verify if the format is day, month, year', function() {
      
      //Get current date in format dd/mm/yyyy;
      const separator = '/';
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();      
      const customDateFormat = currentDay + separator + currentMonth + separator + currentYear;
      const dateFormatArray = customDateFormat.split(separator);
      
      //Verify format
      const isDayCorrect = parseInt(dateFormatArray[0]) > 0 && parseInt(dateFormatArray[0]) <= 31; 
      const isMonthCorrect = parseInt(dateFormatArray[1]) > 0 && parseInt(dateFormatArray[1]) <= 12; 
      const isYearCorrect = parseInt(dateFormatArray[2]) > 0;

      expect(isDayCorrect).toEqual(true);
      expect(isMonthCorrect).toEqual(true);
      expect(isYearCorrect).toEqual(true);
    });

  });

});


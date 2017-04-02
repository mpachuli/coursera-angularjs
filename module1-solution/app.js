(function () {
'use strict';

angular.module('LaunchCheck', [])

.controller('LaunchCheckController', LaunchCheckController);
LaunchCheckController.$inject = ['$scope'];

function LaunchCheckController($scope) {
  $scope.msg = "";
  $scope.textStyle = {};
  $scope.borderStyle = {};

  $scope.displayMsg = function () {
    var nrOfItems = calculateNrOfItems($scope.items);
    $scope.textStyle.style = {"color":"green"};
    $scope.borderStyle.style = {"border": "solid green"};

    if (nrOfItems == 0) {
        $scope.msg = "Please enter data first";
        $scope.textStyle.style = {"color":"red"};
        $scope.borderStyle.style = {"border": "solid red"};

    } else if (nrOfItems <= 3) {
      $scope.msg = "Enjoy!";

    } else {
      $scope.msg = "Too much!";
    }
  };

  function calculateNrOfItems(string) {
    var separator = ',';
    var nrOfItems = 0;

    if (typeof string != 'undefined' && string!='')  {
      var items = string.split(separator);
      for (var i = 0; i < items.length; i++) {
        if(items[i] != '') { //check for empty items
          nrOfItems++;
        }
      }
    }
    return nrOfItems;
  }

}

})();

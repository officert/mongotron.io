angular.module('mongotronApp').controller('footerCtrl', [
  '$scope',
  function($scope) {
    var date = new Date();
    $scope.currentDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
  }
]);

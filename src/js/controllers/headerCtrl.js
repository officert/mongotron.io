angular.module('mongotronApp').controller('headerCtrl', [
  '$scope',
  'utilsService',
  function($scope, utilsService) {
    $scope.scrollToFeatures = function($event) {
      if ($event) $event.preventDefault();

      utilsService.scrollTo('home-features', 0);
    };
  }
]);

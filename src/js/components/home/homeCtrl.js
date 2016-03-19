angular.module('mongotronApp').controller('homeCtrl', [
  '$scope',
  function($scope) {
    $scope.features = [{
      name: 'Replica Sets',
      description: 'Mongotron supports connecting to replica sets.',
      imageUrl : './src/images/features/replsets.png'
    }];
  }
]);

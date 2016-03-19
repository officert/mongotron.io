angular.module('mongotronApp').controller('homeCtrl', [
  '$scope',
  function($scope) {
    $scope.features = [{
      name: 'Replica Sets',
      description: 'Mongotron supports connecting to replica sets. When adding a new connection simply enable the replica sets options and all the server that belong to the set.',
      imageUrl: './src/images/features/replsets.png'
    }];
  }
]);

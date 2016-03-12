angular.module('mongotronApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/js/components/home/home.html',
        controller: 'homeCtrl'
      })
      .state('features', {
        url: '/features',
        templateUrl: 'src/js/components/features/features.html',
        controller: 'featuresCtrl'
      });
  }
]);

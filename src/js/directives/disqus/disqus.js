angular.module('mongotronApp').directive('disqus', [
  function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/js/directives/disqus/disqus.html'
    };
  }
]);

angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      search: '<'
    },
    templateUrl: 'src/templates/search.html'
  });

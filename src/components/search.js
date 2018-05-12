angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      search: '<',
    },
    // controller: function() {
    //   this.searchData = searchText;
    // },
    templateUrl: 'src/templates/search.html'
  });

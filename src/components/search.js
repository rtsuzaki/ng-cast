angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
    search: '<'
  },
  controller: function(youTube) {
    let params = {
      key: window.YOUTUBE_API_KEY,
      query: 'test query',
      max: 5,
    };
    youTube.searchYouTube(params, this.search);
  },
  templateUrl: 'src/templates/search.html'
});

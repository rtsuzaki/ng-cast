angular.module('video-player')
.service('youTube', function($http) {
  this.searchYouTube = function(options, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', 
      {params: {
        part: 'snippet',
        q: options.query,
        maxResults: options.max,
        key: options.key,
        type: 'video',
        videoEmbeddable: 'true'
      }}
    ).then(function successCallback(response) {
      console.log('success');
      callback(response);
    }, function errorCallback(response) {
    
    })
  };
});      

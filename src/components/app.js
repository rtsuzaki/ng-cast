angular.module('video-player')

  .component('app', {
    controller: function(youTube) {

      this.currentVideo = window.exampleVideoData[0];
      
      if (this.currentVideo.length === 0) {
        this.currentVideo.text = 'Please wait';
      }
      
      
      this.videos = window.exampleVideoData;
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      
      this.handleSearchClick = function(callback) {
        let params = {
          key: window.YOUTUBE_API_KEY,
          query: 'test query',
          max: 5,
        };
        youTube.searchYouTube(params, callback);
      };
      
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[0];
      };
      
      
    },
    templateUrl: 'src/templates/app.html',
  });

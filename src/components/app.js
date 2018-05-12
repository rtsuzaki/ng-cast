angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
        
      this.videos = [{
        snippet: {
          thumbnails: {
            default: {
              url: ''
            }
          },
          title: '',
          description: '',
        },
        etag: '',
        id: {
          videoId: ''
        }
      }];

      this.currentVideo = this.videos[0];

      youTube.searchYouTube({
        key: window.YOUTUBE_API_KEY,
        query: 'puppies',
        max: 5,
      }, (e) => { this.searchResults(e); });
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      
      this.handleSearchClick = function(callback, text) {
        let params = {
          key: window.YOUTUBE_API_KEY,
          query: text,
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

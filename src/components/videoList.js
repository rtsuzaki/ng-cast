angular.module('video-player')
  .component('videoList', {
    bindings: {
        videos: '<',
        onClick: '<'
    },
    // controller: function() {
    //   this.onClick = function(video) {
    //     console.log(this.video);
    //     this.currentVideo = this.video;
    //   };
    // },
    
    templateUrl: 'src/templates/videoList.html',
  });

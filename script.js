document.addEventListener('DOMContentLoaded', function() {
    var gif = document.querySelector('.fullscreen-gif');
    gif.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    
    setTimeout(function() {
        gif.style.display = 'none';
        gif.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        
    }, 3300);


    var audio = document.getElementById("audi");
    audio.muted = false;
    audio.volume = 0.1;

    var audio2 = document.getElementById("audi2");
    audio2.muted = false;
    audio2.volume = 0.5;

    
    
});
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '0',
      width: '0',
      videoId: 'tM8PHrArL_E', 
      playerVars: {
        'autoplay': 0 
      },
      events: {
        'onReady': onPlayerReady
      }
    });
  }
function onPlayerReady(event) {
    setTimeout(function() {
      event.target.playVideo(); 
      event.target.setVolume(10);
    }, 3000);
  }
function isGetUserMediaSupported() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
  }
function isAutoplayAllowed() {
    return new Promise((resolve, reject) => {

      if (isGetUserMediaSupported()) {

        navigator.getUserMedia({ audio: true, video: true },
          function(stream) {
            console.log('Permissions granted: Audio and Video');
            resolve(true);
          },
          function(error) {
            console.error('Permissions denied:', error);
            resolve(false);
          }
        );
      } else {
        console.error('getUserMedia is not supported in this browser');
        reject(new Error('getUserMedia is not supported'));
      }
    });
  }
async function displayFloatingWindow() {
    var floatingWindow = document.getElementById('floating-window');
    if (!(await isAutoplayAllowed())) {
      floatingWindow.style.display = 'block';
    }
  }
function enableAutoplay() {
    var floatingWindow = document.getElementById('floating-window');
    floatingWindow.style.display = 'none';
  }

window.onload = function() {
    displayFloatingWindow();
  };
  
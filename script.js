document.addEventListener('DOMContentLoaded', function() {
    var gif = document.querySelector('.fullscreen-gif');
    gif.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    setTimeout(function() {
        gif.style.display = 'none';
        gif.style.width = '1px';
        gif.stle.height = '0px';
        gif.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }, 3300);






    var audio = document.getElementById("audi");
    audio.muted = false;
    audio.volume = 0.1;

    var audio2 = document.getElementById("audi2");
    audio2.muted = false;
    audio2.volume = 0.5;
    
});



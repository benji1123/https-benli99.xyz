let MUSIC_PLAYING = false;
const NUM_SONGS = 4;

const randomSongIndex = Math.floor(Math.random() * NUM_SONGS) + 1;
const MUSIC = new Audio("https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/audio/4.mp3");
const citySounds = new Audio('https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/audio/citySounds.mp3');
const recordScratchFx1 = new Audio('https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/audio/record-scratch.mp3');
const recordScratchFx2 = new Audio('https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/audio/record-scratch.mp3');

function toggleMusic() {
    const groot = document.getElementById('groot')
    const vinyl = document.getElementById('vinyl')
    if (MUSIC_PLAYING) {
        // TODO: play a disc scratch sound fx
        recordScratchFx2.play()
        MUSIC.pause();
        groot.style.animation="grootMoveDown 2s forwards";
        vinyl.style.animation=""; // stop rotating icon
    } else {
        
        recordScratchFx1.play();
        recordScratchFx1.addEventListener("ended", () => {
            MUSIC.play();
            citySounds.play();
            groot.style.animation="grootMoveUp 5s forwards";
        });
    }
    MUSIC_PLAYING = !MUSIC_PLAYING;
}

let MUSIC_PLAYING = false;

const i = Math.floor(Math.random() * 2) + 1;
const MUSIC = new Audio(`media/audio/${i}.mp3`);
const citySounds = new Audio('media/audio/citySounds.mp3');
const recordScratchFx1 = new Audio('media/audio/record-scratch.mp3');
const recordScratchFx2 = new Audio('media/audio/record-scratch.mp3');

function toggleMusic() {
    const groot = document.getElementById('groot')
    const vinyl = document.getElementById('vinyl')
    if (MUSIC_PLAYING) {
        // TODO: play a disc scratch sound fx
        recordScratchFx2.play()
        MUSIC.pause();
        groot.style.animation="grootMoveDown 4s forwards";
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

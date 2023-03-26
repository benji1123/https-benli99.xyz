// audio: 
// traffic noises: media/audio/city-ambience.mp3 or seaside
// + music from here: https://www.youtube.com/watch?v=tnl-euH9mjI&ab_channel=LeslietheGoat

let MUSIC_PLAYING = false;
const music = new Audio('media/audio/dayslikethese.mp3');
const recordScratchFx1 = new Audio('media/audio/record-scratch.mp3');
const recordScratchFx2 = new Audio('media/audio/record-scratch.mp3');

function toggleMusic() {
    const groot = document.getElementById('groot')
    const vinylIcon = document.getElementById('spotifyIcon')
    if (MUSIC_PLAYING) {
        // TODO: play a disc scratch sound fx
        recordScratchFx2.play()
        music.pause();
        groot.style.animation="grootMoveDown 4s forwards";
        vinylIcon.style.animation=""; // stop rotating icon
    } else {
        // TODO: play a disc scratch sound fx
        recordScratchFx1.play();
        recordScratchFx1.addEventListener("ended", () => {
            music.play();
            groot.style.animation="grootMoveUp 3s forwards";
        });
        vinylIcon.style.animation="rotate 8s infinite linear";
    }
    MUSIC_PLAYING = !MUSIC_PLAYING;
}

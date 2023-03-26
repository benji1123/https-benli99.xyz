// audio: 
// traffic noises: media/audio/city-ambience.mp3 or seaside
// + music from here: https://www.youtube.com/watch?v=tnl-euH9mjI&ab_channel=LeslietheGoat

let MUSIC_PLAYING = false;
const DAYS_LIKE_THESE = 'media/audio/dayslikethese.mp3';
const music = new Audio(DAYS_LIKE_THESE);

function toggleMusic() {
    const groot = document.getElementById('groot')
    if (MUSIC_PLAYING) {
        // TODO: play a disc scratch sound fx
        music.pause();
        groot.style.animation="grootMoveDown 4s forwards";
    } else {
        // TODO: play a disc scratch sound fx
        music.play();
        groot.style.animation="grootMoveUp 3s forwards";
    }
    MUSIC_PLAYING = !MUSIC_PLAYING;
}

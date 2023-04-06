const ANIMATED_BACKGROUND = 'https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/background/cyber/cyber.gif';

const loadAnimatedBackground = async () => {
    const imageBlob = await fetch(ANIMATED_BACKGROUND).then(resp => {
        return resp;
    })
    console.log(`fetched image: ${ANIMATED_BACKGROUND}`);
    const bgrndURL = imageBlob.url;
    const left = document.getElementById('left');
    left.style.backgroundImage = `url(${bgrndURL})`;
    URL.revokeObjectURL(bgrndURL);
}

let MUSIC_PLAYING = false;
const MUSIC = new Audio("https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/audio/4.mp3");
const citySounds = new Audio('https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/audio/citySounds.mp3');
const recordScratchFx1 = new Audio('https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/audio/record-scratch.mp3');
const recordScratchFx2 = new Audio('https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/audio/record-scratch.mp3');

const toggleMusic = () => {
    const groot = document.getElementById('groot')
    const vinyl = document.getElementById('vinyl')
    if (MUSIC_PLAYING) {
        recordScratchFx2.play()
        MUSIC.pause();
        groot.style.animation="grootMoveDown 2s forwards";
        // stop rotating icon
        vinyl.style.animation="";
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

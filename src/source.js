const ANIMATED_BACKGROUND = 'https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/background/cyber/cyber.gif';

const loadAnimatedBackground = async () => {
    const imageBlob = await fetch(ANIMATED_BACKGROUND).then(resp => {
        return resp;
    })
    console.log(`fetched image: ${ANIMATED_BACKGROUND}`);
    const bgrndURL = imageBlob.url;
    const cyber = document.getElementById('cyber-container');
    cyber.style.backgroundImage = `url(${bgrndURL})`;
    URL.revokeObjectURL(bgrndURL);
}

const MUSIC = new Audio("https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/audio/4.mp3");
MUSIC.volume = 0.1

const toggleMusic = () => {
    if(MUSIC.paused) {
        MUSIC.play()
    } else {
        MUSIC.pause()
    }
}

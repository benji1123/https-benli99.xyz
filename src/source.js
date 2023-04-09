const ANIMATED_BACKGROUND = 'https://media.githubusercontent.com/media/benji1123/https-benli99.xyz/master/media/background/cyber/cyber.gif';

const loadAnimatedBackground = async () => {
    const img = await fetch(ANIMATED_BACKGROUND).then(resp => {
        return resp;
    })
    console.log(`fetched image: ${ANIMATED_BACKGROUND}`);
    const bgrndURL = img.url;
    const cyber = document.getElementById('cyber-container');
    cyber.style.backgroundImage = `url(${bgrndURL})`;
    URL.revokeObjectURL(bgrndURL);
}

const API_GET_SONG = 'https://pshlsoawx7.execute-api.us-east-1.amazonaws.com/prod'
console.log(audioContext.destination)

let audioCtx
let playSound
let MUSIC_PLAYING = true
let MUSIC_STARTED = false

const getSongFromAPI = () => {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    playSound = audioCtx.createBufferSource()
    // TODO: get this song from API instead of local storage
    const song_1980_dont_stop = '../media/audio/heart-change-brock-hewitt-stories-in-sound-main-version-04-28-13106.mp3'
    fetch(song_1980_dont_stop)
        .then(data => data.arrayBuffer())
        .then(buf => {
            // const uint8arr = new Uint8Array(buf)
            // console.log(uint8arr)
            // return audioCtx.decodeAudioData(uint8arr.buffer)
            return audioCtx.decodeAudioData(buf)
        })
        .then(decodedAudio => {
            playSound.buffer = decodedAudio;
            playSound.connect(audioCtx.destination);
            playSound.start(audioCtx.currentTime);
            console.log(audioCtx);
        });
}

const toggleMusic = () => {
    if (!MUSIC_STARTED) {
        MUSIC_STARTED = true
        getSongFromAPI()
        return
    }
    if(MUSIC_PLAYING)
        audioCtx.suspend()
    else
        audioCtx.resume()
    MUSIC_PLAYING = !MUSIC_PLAYING
}

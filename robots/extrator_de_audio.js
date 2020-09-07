const extractAudio = require('ffmpeg-extract-audio')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

async function robot() {
    ffmpeg.setFfmpegPath(ffmpegPath);

    await extractAudio({
    input: './videos_baixados/myvideo.mp4',
    output: './audio/audio.mp4'
    }).then(console.log("Audio extraido")).catch()
}

module.exports = robot
const extractAudio = require('ffmpeg-extract-audio')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs')

async function robot() {
    ffmpeg.setFfmpegPath(ffmpegPath);
    fs.mkdirSync('./audio')
    await extractAudio({
    input: './videos_baixados/myvideo.mp4',
    output: './audio/audio.mp4'
    }).then(console.log("Audio extraido")).catch()
}

module.exports = robot
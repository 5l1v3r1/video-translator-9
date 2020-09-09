const extractAudio = require('ffmpeg-extract-audio')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs')

async function robot() {
    ffmpeg.setFfmpegPath(ffmpegPath);
    if (!fs.existsSync('./audio/')) {
        fs.mkdirSync('./audio')
    }
    
    await extractAudio({
        input: './videos_baixados/myvideo.mp4',
        output: './audio/audio.mp3'
    })
    
    console.log("Audio extraido")
}

module.exports = robot
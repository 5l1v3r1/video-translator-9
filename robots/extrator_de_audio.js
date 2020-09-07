const extractAudio = require('ffmpeg-extract-audio')

await extractAudio({
  input: 'videos_baixados/myvideo.mp4',
  output: 'audio/audio.mp4'
})
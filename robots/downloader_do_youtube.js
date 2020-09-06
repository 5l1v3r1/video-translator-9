const fs = require('fs')
const youtubedl = require('youtube-dl')

var link = 'http://www.youtube.com/watch?v=90AiXO1pAiA'
if (fs.existsSync('video-info.json')) {
    const fileBuffer = fs.readFileSync('./video-info.json')
    const contentJson = JSON.parse(fileBuffer)
}
 
const video = youtubedl(link,
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname })

video.on('info', function(info) {
  console.log('Download started')
  console.log('filename: ' + info._filename)
  console.log('size: ' + info.size)
})
 
video.pipe(fs.createWriteStream('videos_baixados/myvideo.mp4'))
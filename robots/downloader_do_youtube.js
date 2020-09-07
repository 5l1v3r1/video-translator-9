const fs = require('fs')
const youtubedl = require('youtube-dl')

async function robot() {
    var link = 'http://www.youtube.com/watch?v=90AiXO1pAiA'
    if (fs.existsSync('video-info.json')) {
        const fileBuffer = fs.readFileSync('./video-info.json')
        const contentJson = JSON.parse(fileBuffer)
        link = contentJson.link
    }
    
    const video = await youtubedl(link,
    // Optional arguments passed to youtube-dl.
    ['--format=18'],
    // Additional options can be given for calling `child_process.execFile()`.
    { cwd: __dirname })

    await baixar()

    async function baixar() {
        await video.on('info', function(info) {
        console.log('Download started')
        console.log('filename: ' + info._filename)
        console.log('size: ' + info.size)
        })
        
        video.pipe(await fs.createWriteStream('./videos_baixados/myvideo.mp4'))
        
        let end = new Promise((res) => {
            video.on('end',function(){
            return res("Now it's done!")
            })
        })

        
        await end
    }

    



}
module.exports = robot
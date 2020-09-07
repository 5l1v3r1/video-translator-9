const robots = {
    audio: require('./robots/leitor_de_audio'),
    link: require('./robots/receptor_do_link'),
    downloader: require('./robots/downloader_do_youtube'),
    extrator: require('./robots/extrator_de_audio')
}

async function start() {
    await robots.link()
    await robots.downloader()
    await robots.extrator()
    
} 

start()
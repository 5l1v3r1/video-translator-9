//Aqui ele começa informando os scripts necessários para rodar
const robots = {
    audio: require('./robots/leitor_de_audio'),
    link: require('./robots/receptor_do_link'),
    downloader: require('./robots/downloader_do_youtube'),
    extrator: require('./robots/extrator_de_audio')
}
//Aqui ele define o que fazer quando rodar em fila
//Descomente essa parte se ela estiver comentada
async function start() {
    //await robots.link()
    //await robots.downloader()
    await robots.extrator()
    await robots.audio()
} 
//Aqui ele inicia
start()


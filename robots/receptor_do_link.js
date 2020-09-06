var readline = require('readline-sync');
var fs = require('fs')

var link = readline.question('Qual o link do vídeo? ')
var data = {
    link: link
}

const jsonString = JSON.stringify(data)

fs.writeFileSync('./video-info.json',jsonString)
console.log('link salvo')
const fs = require('fs');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

async function robot() {
    console.log('Iniciando o watson')
    const speechToText = new SpeechToTextV1({
        authenticator: new IamAuthenticator({
            apikey: '4g9UoMfMR0x98vNh8_4Qt-Dm7filqNAlI4q-Qv092qWg',
        }),
        serviceUrl: 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/bbaf5b4b-0851-421b-ac78-186e3e715bbf',
    });
    const recognizeParams = {
        audio: fs.readFileSync('./audio/audio.mp3'),
        contentType: 'audio/mp3',
    };

    console.log('Iniciando reconhecimento do audio')

    
    var text = (await speechToText.recognize(recognizeParams).catch(err => {
        console.log('error:', err);
    })).result
    console.log('Reconhecimento completo')
    text['results'].forEach(result => {
        console.log(result['alternatives'])
    });
    
}

module.exports = robot
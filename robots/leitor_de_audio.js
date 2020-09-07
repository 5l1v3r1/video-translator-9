const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: '4g9UoMfMR0x98vNh8_4Qt-Dm7filqNAlI4q-Qv092qWg',
  }),
  serviceUrl: 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/bbaf5b4b-0851-421b-ac78-186e3e715bbf',
});

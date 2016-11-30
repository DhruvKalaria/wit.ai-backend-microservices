'use strict';

const service = require('../server/service');
const http = require('http');
const slackClient = require('../server/slackClient');
const witToken = 'Q2OOSB7ISPLSRRDXTBGBXJVLXLDHMST6';
const witClient = require('../server/witClient')(witToken);
const server = http.createServer(service);

const slackToken = 'xoxb-109290369106-Xrg9nYj94g72EyS0wIHNCJBb';
const slackLogLevel = 'verbose';

const rtm = slackClient.init(slackToken,slackLogLevel, witClient);
rtm.start();

slackClient.addAuthenticatedHandler(rtm, ()=>server.listen(3000));

server.on('listening', function() {
    console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')} mode.`);
});
'use strict';
const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
let rtm = null;
let nlp = null;

function handleOnMessage(message) {
    nlp.ask(message.text);
    rtm.sendMessage('Test Message', message.channel);
}

function handleOnAuthenticated(rtmStartData) {
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name} but not yet connected to a channel.`);
}

function addAuthenticatedHandler(rtm, handler) {
    rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED,handler);
}

module.exports.init = function slackClient(token, logLevel, nlpClient) {
    rtm = new RtmClient(token, { logLevel: logLevel });
    nlp = nlpClient;
    addAuthenticatedHandler(rtm,handleOnAuthenticated);
    rtm.on(RTM_EVENTS.MESSAGE,handleOnMessage);
    return rtm;
}

module.exports.addAuthenticatedHandler = addAuthenticatedHandler;
'use strict';

const request = require('superagent');

module.exports.process = function process(intentData, cb) {
    if(intentData.intent[0].value != 'time') {
        return cb(new Error(`Expected time intent, but got ${intentData.intent[0].value}`));
    }

    if(!intentData.location) return cb(new Error('Missing location in time intent'));

    const location = intentData.location[0].value;
    console.log(location);
    request.get(`http://localhost:3010/service/${location}`, (err, response) => {
        if(err || response.statusCode != 200) {
            console.log(err);
            return cb(false, `Error in finding out time for ${location}`);
        }
        return cb(false, `Time in ${location} is ${response.body.result}`);
    });
}
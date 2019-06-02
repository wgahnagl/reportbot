require('dotenv').config();
var Botkit = require('botkit');

var controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: process.env.SLACK_AUTH_TOKEN,
    // your API key here
}).startRTM(function (err) {
    if (err) {
        throw new Error(err);
    }
});

controller.hears(['hello', 'hi'], ['direct_mention'], function (bot, message) {
    bot.reply(message, "Hello.");
});

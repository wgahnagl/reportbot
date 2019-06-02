require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

// Creates express app
const app = express();

// The port used for Express server
const PORT = 3000;

// Starts server
app.listen(process.env.PORT || PORT, function() {
    console.log('Bot is listening on port ' + PORT);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    let payload = req.body;
    if(payload.event.type === "app_mention"){
        if(payload.event.text.includes("test")){
            var data = {form: {
                    token: process.env.SLACK_AUTH_TOKEN,
                    channel: "reportbot-development",
                    text: "testing"
                }};
        }
    }else{
        var data = {form: {
                token: process.env.SLACK_AUTH_TOKEN,
                channel: "reportbot-development",
                text: "it's reportbot"
            }};
    }
    
    request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
        // Sends welcome message
        res.json();
    });
});
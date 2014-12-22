var Twit = require('twit');
var config00 = require('./config00.js');


var T = new Twit(config00);

console.log('Starting Twitter Bot...');

var phrases = ['Shop at Nutritonik.com!',
    'Health for a Future. Save @ Nutritonik.com',
    'Check out our partner site at http://bit.ly/YjuUY6',
    'Live Healthy- Nutritonik.com'];

// Returns a Random Time
function getRandomTime() {
    return Math.floor(Math.random() * (3600000 - 2800000)) + 2800000;
}

function getRandom(max_num){
    return Math.floor(Math.random()*max_num);
}

// Run to start
T.post('statuses/update', { status: phrases[getRandom(phrases.length)] }, function(err, data, response) {
    console.log(data);
    console.log(err);
});

setInterval(function(){
    T.post('statuses/update', { status: phrases[getRandom(phrases.length)] }, function(err, data, response) {
        console.log(data);
        console.log(err);
    });
}, getRandomTime());




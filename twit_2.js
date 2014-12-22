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

// Tests to Run


//
// filter the public stream by the latitude/longitude bounded box of San Francisco
//
var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ];

var sanJose = ['-122.08', '37.23', '-121.75', '37.4'];

//var stream = T.stream('statuses/filter', { locations: sanJose });
//
//stream.on('tweet', function (tweet) {
//    console.log(tweet.user.screen_name + ": " + tweet.text);
//});

T.get('search/tweets', { q: 'health:2014-12-20', count: 5}, function(err, data, response) {
    console.log(data.statuses.forEach(function(el){
        console.log(el.text);
    }));
});
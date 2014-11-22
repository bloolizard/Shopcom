var Twit = require('twit');
var config00 = require('./config00.js');


var T = new Twit(config00);

console.log('Starting Twitter Bot...');

var phrases = ['Shop at Nutritonik.com!',
    'Health for a Future. Save @ Nutritonik.com '];

T.post('statuses/update', { status: phrases[1] }, function(err, data, response) {
    console.log(data);
    console.log(err);
});


setTimeout(function(){
    T.post('statuses/update', { status: 'Shop at Nutritonik.com!' }, function(err, data, response) {
        console.log(data);
        console.log(err);
//    console.log(response);
    });
}, 3600000);




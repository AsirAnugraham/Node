var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/ReadableStream/ReadMe.txt', 'utf8');

var myWriteStream = fs.createWriteStream(__dirname + '/WriteableStream/writeMe.txt');


myReadStream.on('data', function(chunk){
    console.log('new chunk Received:');
    myWriteStream.write(chunk);
});
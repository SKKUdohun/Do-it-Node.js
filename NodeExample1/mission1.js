

var fs = require('fs');
var readline = require('readline');

function processFile(filename) {
    var instream = fs.createReadStream(filename);
    var reader = readline.createInterface(instream, process.stdout);

    var count = 0;

    reader.on('line', function(line) {
        console.log('고객 : ' + line);

        count += 1;

        var tokens = line.split(' ');

        if (tokens != undefined && tokens.length > 0) {
            console.log('#' + count + ' -> ' + tokens[0]);
        }
    });

    reader.on('close', function(line) {
        console.log('파일을 닫습니다.');
    });
}

var filename = './customer.txt';
processFile(filename);

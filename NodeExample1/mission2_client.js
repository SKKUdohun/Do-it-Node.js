
var net = require('net');

var hostname = 'localhost';
var port = 3000;


var client = new net.Socket();
client.connect(port, hostname, function() {
    console.log('�쒕쾭�� �곌껐�� -> ' + hostname + ':' + port);
	client.write('�덈뀞');
});


client.on('data', function(data) {
	console.log('�쒕쾭濡쒕��� 諛쏆� �곗씠�� -> ' + data);


	client.destroy();
});

client.on('close', function() {
	console.log('�곌껐 �딆뼱吏�.');
});

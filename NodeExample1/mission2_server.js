

var net = require('net');


var server = net.createServer(function (socket) {

    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    console.log('�대씪�댁뼵�� �곌껐�� -> ' + socket.name);


    socket.on('data', function (data) {
        console.log('�대씪�댁뼵�몃줈遺��� 諛쏆� �곗씠�� : ' + data);


        socket.write(data + ' from server.');
    });


    socket.on('end', function() {
        console.log('�대씪�댁뼵�몃줈遺��� �곌껐 �딆뼱吏� -> ' + socket.name);
    });

});

var port = 3000;
server.listen(port);

console.log('�뚯폆 �쒕쾭 �ㅽ뻾�� : ' + port);

var express = require('express')
  , http = require('http');

var app = express();

app.use(function(req,res,next){
  console.log('첫 번째 미들웨어에서 요청을 처리함.');

  res.send({name:'소녀시대', age:20});
});

app.use(function(req,res,next){
  console.log('두 번째 미들웨어에서 요청을 처리함.');

  res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
  res.end('<h1>Express 서버에서' + req.user +'가 응답한 결과입니다.</h1>')
})


http.createServer(app).listen(3000, function(){
  console.log('익스프레스 서버를 3000번 포트에서 시작했습니다. ');
});
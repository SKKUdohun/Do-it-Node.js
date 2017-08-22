var fs = require('fs');

var data = fs.readFileSync('./package.json','utf8');

//읽어 들인 데이터를 출력

console.log(data);

var Users = [{name:'소녀시대', age:20}, {name:'걸스데이',age:22}];

Users.push({name:'티아라',age:23});

console.log('사용자 수 : %d', Users.length);
console.log('첫 번째 사용자 이름 : %s', Users[0].name);
console.dir(Users);

var add = function(a,b){
  return a+b;
};

Users.push(add);
console.log('배열 요소의 수 : %d',Users.length);
console.log('네 번째 요소로 추가된함수 실행:%d', Users[3](10,20));

console.log('\nforEach 구문 사용하기');
Users.forEach(function(item,index){
  console.log('배열 요소 #' + index + ' : %s ', item.name);
})

Users.splice(2,0,{name:'AOA', age:24});

console.dir(Users);

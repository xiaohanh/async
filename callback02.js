#!/usr/bin/node
//function LongTimeOperaton(callback),括号中传的是一个函数，传哪个函数，就调用哪个回调函数。
function LongTimeOperation(callback){
console.log('this is LongTimeOperation.');
//设置延迟值，随机延迟在5000毫秒以内
var delay=parseInt(Math.random()*10000000%5000);

setTimeout(function(){
  console.log('the LongTimeOperation cost ' +delay +  ' ms.');
  callback();
},delay);
}

function f2(){
  console.log('this is f2,i am callback');
}

LongTimeOperation(f2);


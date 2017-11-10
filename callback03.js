#!/usr/bin/node
//耗时操作模拟代码的升级，面向对象编程
var LongTimeOperation=function(taskID){
//id是私有变量

  var id=taskID;
  //go方法是公共方法

  this.go=function(callback){

  
console.log('this is LongTimeOperation#'+id);
var delay=parseInt(Math.random()*10000000%5000);

setTimeout(function(){
  console.log('the tack # ' +id+' cost '+delay +  ' ms.');
  callback();
},delay);
}
}

function f2(){
  console.log('this is f2,i am callback');
}
//产生5个并发的耗时操作
for(var i=0;i<5;i++){
  var task=new LongTimeOperation(i);
  task.go(f2);

}


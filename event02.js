#!/usr/bin/node
//事件监听：
//自定义事件发生器：
//1.实例化出一个自定义的事件发生器
//2.发生事件
//3.响应事件
var EventEmitter=require('events').EventEmitter;
//eventObj 是自定义的事件发生器
var eventObj=new EventEmitter();
//响应事件
eventObj.on('done',function(id){
  console.log('event done with id',id);
});

//发生事件
console.log('begin');
setTimeout(function(){
  eventObj.emit('done',1);
},1000);

eventObj.emit('done',2);
console.log('end');



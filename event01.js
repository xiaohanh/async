#!/usr/bin/node
//简单的网页爬取程序：


//http模块用来发起请求
var http=require('http');
//爬取的网站地址
var url="http://www.baidu.com";
//http发起get请求
http.get(url,function(res){
  //设置编码格式
  res.setEncoding('utf-8');
  //事件处理，on是对事件响应的函数，res//.on()括号中的第一个参数是字符串，是事//件的名称，第二个参数是事件响应的代码
//，写成回调函数，来对事件发生之后做处
//理。
  res.on('data',function(data){
    console.log(data);
  });
  //end事件时，请求已经结束
  res.on('end',function(){
    console.log('game over!');

  });
});




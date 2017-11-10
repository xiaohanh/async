#!/usr/bin/node
//发布、订阅
//消息中心：Subject
var Subject=function(){
  //数组存放订阅者
  var _observers=[];
//把订阅者的身份添加到订阅列表
  this.attach=function(observer){
    _observers.push(observer);

  }
//把身份从订阅者列表去掉
  this.detach=function(){
    //pop（）弹出最后一个。
    _observers.pop();
  }
  //发通知，msg是消息
  this.notify=function(msg)
  {
    for(var i=0;i<_observers.length;i++){
      _observers[i].update(msg);
    }
  }
//打印观察者列表
  this.print=function(){
    console.log(_observers.length);
    console.log(_observers);
  }
}


var Observer=function(name){
  this.update=function(msg){
    console.log('I am',name,'and I get the message',msg);
  }
}





var sub=new Subject();
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');

console.log('');


setTimeout(function(){
  var c=new Observer('c');
  sub.detach();
  sub.attach(c);
  sub.notify('world');
},1000);




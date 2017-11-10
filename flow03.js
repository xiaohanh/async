#!/usr/bin/node
//混合执行
var  LongTimeOperation=function(taskID){
  var id=taskID;
  this.go=function(callback){
    console.log('this is LongTimeOperation#'+id);
    var delay=parseInt(Math.random()*10000000%5000);
    setTimeout(function(){
      console.log('the track #'+id+' cost '+delay +' ms');
      callback();
    },delay);
  }
}
var max=3;
var total=11;
var count=0;
var pool=max;
function f2(){
  count++;
  pool--;
   console.log('this is f2,i am callback');
  if(count<total){
    
    var task=new LongTimeOperation(count);
    task.go(f2);
  pool++;
  }else{
    if(pool==0){
    end();
    console.timeEnd('FLOW-CONTROL');
    }
  }

 }

function end(){console.log('time end task.');}
console.time('FLOW-CONTROL');



for (var i=0;i<max;i++,count++){
 
    var task=new LongTimeOperation(count);
    task.go(f2);     
       }

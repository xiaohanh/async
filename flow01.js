#!/usr/bin/node
//并行执行
var LongTimeOperation=function(taskID){

  var id=taskID;
  this.go=function(callback){

  
console.log('this is LongTimeOperation#'+id);
var delay=parseInt(Math.random()*10000000%5000);

setTimeout(function(){
  console.log('the tack # ' +id+' cost '+delay +  ' ms.');
  callback();
},delay);
}
}


var count=0;
function f2(){
  count++;
  console.log('this is f2,i am callback.\n');
  if(count==5){
    end();
    console.timeEnd('FLOW-CONTROL');

  }
}
console.time('FLOW-CONTROL');
for(var i=0;i<5;i++){
  var task=new LongTimeOperation(i);
  task.go(f2);
}

function end(){
console.log('the end task.');  
}


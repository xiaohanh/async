#!/usr/bin/node
//串行执行
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
  if(count<5){
    var task=new LongTimeOperation(count);
    task.go(f2);
  }else{

    end();
    console.timeEnd('FLOW-CONTROL');

  }
}

function end()
{console.log('the end task.');

}
console.time('FLOW-CONTROL');
var task0=new LongTimeOperation(0);
task0.go(f2);


function f1()
{
  console.log('hi');
}
f1();

var abc = function f2(){
  console.log('Hello Asir');
};
abc();

function callfunc(fun)
{
  fun();
}
callfunc(abc);
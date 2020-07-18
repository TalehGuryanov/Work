// 1
var array = [1, 2, 3, 4, 5];
var newArray = array.slice();


// 2
var obj = {
  name: 'John',
  age: 25,
  gender: 'male',
};
var newObj = Object.assign({}, obj);
var origin = {
  1: 'a',
  2: 'b',
  3: 'c',
 };
var clone = {};
for(var key in origin){
  clone[key] = origin[key];
} 



// 3
var anotherFunction = function(x){
  console.log(Math.sqrt(x));
} ;

var printSquareRoot = function(a, func){
  func(a);
};
printSquareRoot(64, anotherFunction);



// 4
function outer() {

  var array = [];

  function inner(x) {
    if (array.length === 5) {
      array.length = 0;
    };
    array.push(x);
    console.log(array)
  };
  return inner;
};

  var add = outer();
  add(1);
  add(2);
  add(3);
  add(4);
  add(5);
  add(6);
  add(7);
  add(8);
  add(9);



// 5
var button = document.getElementsByTagName('button')[0];
var clickButton = function(){
  var count = 1;
  return function(e){
    e.currentTarget.innerText = 'Click count: ' + count++;
    console.log(e)
 } 
};
var makeCounterHandler = clickButton();

button.addEventListener('click', makeCounterHandler);




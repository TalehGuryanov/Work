'use strict'

// 1
function showName(name = '%username%'){
  console.log(`Hello ${name}`)
};

showName();
showName(name);


// 2

let arrCity = [
  {
    city: 'New York',
    country: 'USA'
    
  },
  {
    city: 'Paris',
    country: 'France'
  },
  {
    city: 'San Francisco',
    country: 'USA'
    
  },
  {
    city: 'Minsk',
    country: 'Belarus'
  }
  ];
  
  
let objCity = 
{
  usa: [],
  europe: []
};
  
arrCity.reduce(function(acc, item){
  item.country === 'USA' ? acc.usa.push(item.city) : acc.europe.push(item.city);
  return acc
} , objCity);

// 3
let arrNum = [1, 2, 1085, -485];
console.log(Math.min.apply(null, arrNum));
console.log(Math.max(...arrNum))



// 4

function sum(x, y){
  return x + y;
};

let newSum = sum.bind(null, 2);
console.log(newSum(3))

// 5

let setNum = function(x) {
  return {
      plus: function(y) {
          x += y;
          return this;
      },
      minus: function(y) {
          x -= y;
          return this;
      },
      getResult: function() {
          return x;
      }
  };
};

console.log(setNum(10).plus(7).minus(2).getResult());


// 6

let{usa, europe} = objCity;

// 7
const obj = {
  fistName: 'Yura',
  lastName: 'Alekseyev',
  job: 'web developer',
  
  printInfo: function() {
    console.log(`${this.fistName} ${this.lastName} works as ${this.job}.`)
  }
};

const obj1 = {
  fistName: 'John',
  lastName: 'Kalligan',
  job: 'musician'
};

obj.printInfo();

obj.printInfo.call(obj1);


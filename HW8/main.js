'use strict'

// 1
function showName(name = '%username%'){
  console.log(`Hello ${name}`)
};

showName();
showName(name);


// 2

let arr = [
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
  
  
let obj = 
{
  usa: [],
  europe: []
};
  
arr.reduce(function(acc, item){
  item.country === 'USA' ? acc.usa.push(item.city) : acc.europe.push(item.city);
  return acc
} , obj);

// 3
let arr = [1, 2, 1085, -485];
console.log(Math.min.apply(null, arr));
console.log(Math.max(...arr))



// 4

function sum(x, y){
  return x + y;
};

let newSum = sum.bind(null, 2);
console.log(newSum(3))

// 5

let chain = {
    num : 0, 
    setNum(x) {
        this.num = x;
        return this;
    },
    plus(x) {
        this.num += x;
        return this;
    },
    minus(x) {
        this.num -= x; 
        return this;
    },
    showNum() {
        console.log(this.num);
        return this;
    }
};

chain.setNum(10).plus(7).minus(2).showNum();

// 6

let{usa, europe} = obj;

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


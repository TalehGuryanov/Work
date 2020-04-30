// 1
var arr = [1, 2, 3, 4, 5]
arr.unshift(0)
console.log(arr)
// 2
arr.push(6)
console.log(arr)
// 3
delete arr[4]

console.log(arr)

arr.splice(1, 2);
console.log(arr)


// 5

var arr = [11, 27, 3, 4,8, "Зеленый", "Синий", "Дерево", null, 0];
for (let key of arr){
  if (typeof key == "number" && key > 7){
   console.log(key) ;
  } 
}

// 6

var arr = [11, 27, 3, 4,8, "Зеленый", "Синий", "Дерево", null, 0];
for (let key of arr){
  if (typeof key == "string" && key.length > 5){
   console.log(key) ;
  } 
}

// 7

var arr = [11, 27, 3, 4,8, "Зеленый", "Синий", "Дерево", null, 0];
for (let key of arr){
  if ( typeof key === "number"){
    console.log("This is a number", key)
  } else if (typeof key === "string", key){
    console.log("This is a string", key)
  } else {
    console.log("This is some type", key)
  }
} 

// 8

var arr = [
  {
      id: 1,
      message: 'Test',
      isHidden: false
  },
  {
      id: 2,
      message: 'Test2',
      isHidden: true
  },
  {
      id: 3,
      message: 'Test3',
      isHidden: false
  },
  {
      id: 4,
      message: 'Test4',
      isHidden: true
  },
];


for (var key of arr) {
  if (key.isHidden !== true) {
      console.log('message - ' + key.message);
  }
};


// 11

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var key of arr){
    if (key % 2 == 0){
      console.log("EVEN");
    } else {
      console.log("ODD")
    };
  };
;
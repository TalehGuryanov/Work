// 1 Добавить элемент в начало массива

var arr = [1, 2, 3, 4, 5]
arr.unshift(0)
console.log(arr)


// 2Добавить элемент в конец массива


arr.push(6)
console.log(arr)

// 3 Удалить элемент из массива (двумя способами)

delete arr[4]

console.log(arr)

arr.splice(1, 2);
console.log(arr)


// 4 Удалить повторяющиеся значения из массива

var a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
var b = [];

for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    };
};
console.log(b);


// 5 Массив содержит числа и строки. Вывести в консоль все числовые значения больше 7. Формат вывода - "индекс тире значение"

var arr = [11, 27, 3, 4,8, 'Зеленый', 'Синий', 'Дерево', null, 0];
for (var i = 0; i < arr.length; i++){
  if (typeof arr[i] == 'number' && arr[i] > 7){
    console.log([i] + '-' + arr[i]);
  } 
}

// 6 Массив содержит числа и строки. Вывести в консоль все строковые значения массива, длина которых больше 5. Формат вывода - "индекс тире значение"

var arr = [11, 27, 3, 4,8, 'Зеленый', 'Синий', 'Дерево', null, 0];
for (var i = 0; i < arr.length; i++){
  if (typeof arr[i] == 'string' && arr[i].length > 5){
    console.log([i] + '-' + arr[i]);
  } 
}

// 7 Массив содержит все возможные типы данных в произвольном порядке. Задача перебрать массив и вывести сообщение на каждую итерацию. Сообщение будет содержать текст "This is a number", если текущий тип - это number, "This is a string", если текущий тип - string и "This is some type", если текущий тип не string и не number

var arr = [11, 27, 3, 4,8, 'Зеленый', 'Синий', 'Дерево', null, 0];
for (var i = 0; i < arr.length; i++){
  if ( typeof arr[i] === 'number'){
    console.log('This is a number', arr[i])
  } else if (typeof key === 'string', arr[i]){
    console.log('This is a string', arr[i])
  } else {
    console.log('This is some type', arr[i])
  }
} 


// 8 Поле id содержит произвольную цифру, message - произвольный текст, isHidden - true либо false. Задача пробежаться циклом по массиву и вывести message тех объектов, у которых isHidden не true

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


for (var i = 0; i < arr.length; i++) {
  if (arr[i].isHidden !== true) {
      console.log('message - ' + arr[i].message);
  }
};


// 9 Есть массив объектов, содержащих одно единственное поле title. Это поле является произвольной строкой. Задача на его основе создать новый массив, в который будут помещены эти же объекты с дополнительным полем titleUppercased, содержащим строку title, но написанную заглавными буквами

var array = [
  {
    title: 'some text'
  },
  
  {
  title: 'some title'
  },
];


var newArray = [];

for(var i = 0; i < array.length; i++) {
  var obj = {
    title: array[i].title,
    titleUppercased: array[i].title.toUpperCase()
  };
  newArray.push(obj);
}

console.log(newArray);


// 10 Есть массив строк. Задача перебрать массив и вывести только те элементы, в которых содержится буква 'u'

var array = ['blue', 'green', 'black', 'purple']

for(var i = 0; i < array.length; i++){
  if (array[i].indexOf('u') > 0) {
      console.log(array[i]);
      };
} 


// 11 Есть массив произвольных чисел. Задача перебрать массив и вывести в консоль сообщение на каждую итерацию о том чётное перед нами число, либо нечётное

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      console.log('EVEN');
    } else {
      console.log('ODD')
    };
  }

  // 12 Есть две функции. Первая принимает число в качестве единственного аргумента и возвращает квадрат этого числа. Вторая функция принимает первую как аргумент, вызывает её у себя внутри, передав любое число. Результат вызова кладёт в пустой массив и возвращает этот массив.

  var calc = function(num){
    return num * num
  };
  
  
  var test = function(func){
       
    var array = [];
    
    array.push(func(8))
    
    return array;
  };
  
  console.log(test(calc));

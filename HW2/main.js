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
   console.log(arr[i]) ;
  } 
}

// 6 Массив содержит числа и строки. Вывести в консоль все строковые значения массива, длина которых больше 5. Формат вывода - "индекс тире значение"

var arr = [11, 27, 3, 4,8, 'Зеленый', 'Синий', 'Дерево', null, 0];
for (var i = 0; i < arr.length; i++){
  if (typeof arr[i] == 'string' && arr[i].length > 5){
   console.log(arr[i]) ;
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


// 11 Есть массив произвольных чисел. Задача перебрать массив и вывести в консоль сообщение на каждую итерацию о том чётное перед нами число, либо нечётное

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      console.log('EVEN');
    } else {
      console.log('ODD')
    };
  }
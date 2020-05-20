var body = document.body;
var button = document.querySelector('button');
var colors = [];
var obj = {
  field1: 546,
  field2: 'Hello from Mars',
  field3: function(){
  },
  field4: '',
  field5: ['#00bcd4', '#ffc107', '#c00548'],
};
var findArrayHandler = function(){
  var randomColors  = Math.floor(Math.random() * colors.length);
  if(!colors.length){
    for(var prop in obj) {
      if (obj[prop] instanceof Array){
          colors = obj[prop];
      };
    };
  };
  body.style.backgroundColor = colors[randomColors];
};

var counter = -1;
var changeColorsOnBody = function(e){
  var isLeftKey = e.code === 'ArrowLeft';
  var isRightKey = e.code === 'ArrowRight';

  if ((isLeftKey || isRightKey) && !colors.length) {
    return alert('Достаньте массив цветов');  
  } else if (isLeftKey) {
    counter--;
  } else if (isRightKey) {
    counter++;
  } else {
    return;
  }
  
  if (counter < 0) {
    counter = colors.length - 1;
  } else if (counter === colors.length) {
    counter = 0;
  }
  
  body.style.backgroundColor = colors[counter];
};

console.log(colors);
body.addEventListener('keydown', changeColorsOnBody);
button.addEventListener('click', findArrayHandler);



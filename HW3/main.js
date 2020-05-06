
var body = document.body;
var itemText = document.querySelector('.l-tasks__item-text');
var btnToggle = document.querySelector('.l-tasks__btn._toggle');
var btnRemove = document.querySelector('.l-tasks__btn._remove');
var spansArray = document.querySelectorAll('span');

var func = function(num){
  if(typeof num === 'number' && num % 2 === 0){
    itemText.innerText = 'Number 8 is even';
  } else {
    itemText.innerText = 'This is not a number';
  }; 
}; func(8);

console.log(itemText[0]);


var changeColorHandler = function(){
  body.classList.toggle('_color-scheme-light');
};

btnToggle.addEventListener('click', changeColorHandler);


var removeSpanHandler = function(){
  if( body.classList.contains('_color-scheme-light')){
    spansArray[9].remove();
  } else {
    spansArray[0].remove();
  }; btnRemove.removeEventListener('click', removeSpanHandler);
};

btnRemove.addEventListener("click", removeSpanHandler);
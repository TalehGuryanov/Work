
var body = document.body;
var itemText = document.querySelector('.l-tasks__item-text');
var btnToggle = document.querySelector('.l-tasks__btn._toggle');
var btnRemove = document.querySelector('.l-tasks__btn._remove');
var spansArray = document.querySelectorAll('span');
var changeColorHandler = function(){
  body.classList.toggle('_color-scheme-light');
};
var removeSpanHandler = function(){
  if( body.classList.contains('_color-scheme-light')){
    spansArray[spansArray.length-1].remove();
  } else {
    spansArray[0].remove();
  }; btnRemove.removeEventListener('click', removeSpanHandler);
};
var checkNum = function(num){
  var type = 'odd';

  if (typeof num !== 'number'){
    return itemText.innerText = 'This is not a number';
  }

  if (num % 2 === 0){
    type = 'even';
  }

  itemText.innerText = 'Number ' + num + ' is ' + type;
}; 

checkNum(1000);

btnToggle.addEventListener('click', changeColorHandler);
btnRemove.addEventListener("click", removeSpanHandler);
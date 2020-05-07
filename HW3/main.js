
var body = document.body;
var itemText = document.querySelector('.l-tasks__item-text');
var btnToggle = document.querySelector('.l-tasks__btn._toggle');
var btnRemove = document.querySelector('.l-tasks__btn._remove');
var spansArray = document.querySelectorAll('span');
var changeColorHandler;
var removeSpanHandler;
var checkNum;

 checkNum = function(num){
  if(typeof num === 'number' && num % 2 === 0){
    itemText.innerText = 'Number ' + num + ' is even';
  } else if (typeof num === 'number' && !(num % 2 === 0)){
    itemText.innerText  = 'Number ' + num + ' is odd';
  } else {
    itemText.innerText = 'This is not a number';
  }; 
}; checkNum(1000);

console.log(itemText[0]);


changeColorHandler = function(){
  body.classList.toggle('_color-scheme-light');
};

btnToggle.addEventListener('click', changeColorHandler);

removeSpanHandler = function(){
  if( body.classList.contains('_color-scheme-light')){
    spansArray[spansArray.length-1].remove();
  } else {
    spansArray[0].remove();
  }; btnRemove.removeEventListener('click', removeSpanHandler);
};

btnRemove.addEventListener("click", removeSpanHandler);
var itemText = document.getElementsByClassName('l-tasks__item-text');

var func = function(num){
  if(typeof num === 'number' && num % 2 === 0){
    itemText[0].innerText = 'Number 8 is even';
  } else {
    itemText[0].innerText = 'This is not a number';
  };
}; func(8);

console.log(itemText[0]);



var body = document.body;

var toggle = document.getElementsByClassName('_toggle')[0];

var changeColorScheme = function(){
  body.classList.toggle('_color-scheme-light');
};

toggle.addEventListener('click', changeColorScheme);


var btnRemove = document.getElementsByClassName('_remove')[0];

var span = document.querySelectorAll('span');;

var removeSpan = function(){
if( body.classList.contains('_color-scheme-light')){
span[9].remove();
} else {
span[0].remove();
};
};

btnRemove.addEventListener("click", removeSpan);
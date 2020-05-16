var body = document.body;
var buttonSubmit = document.getElementsByClassName('f-default__btn')[0];
var email = document.getElementsByTagName('input')[0];
var password = document.getElementsByTagName('input')[1];
var buttonSubmitHandler = function(event){
  event.preventDefault()
  event.stopPropagation()

  if(!email.value || !password.value){
    alert('Поле не заполнено');
  } else if(password.value && password.value.length < 10){
    alert('Пароль должен содержать не менее 10 символов');
  };
};

buttonSubmit.addEventListener('click', buttonSubmitHandler);

body.addEventListener('click', function(e){
  e.stopImmediatePropagation();
  console.log('BODY_1');
}
);
body.addEventListener('click', function(){
  console.log('BODY_2');
}
);
body.addEventListener('click', function(){
  console.log('BODY_3');
}
);



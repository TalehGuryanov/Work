var body = document.body;
var buttonSubmit = document.getElementsByClassName('f-default__btn')[0];
var form = document.querySelector('.f-default');
var formSubmitHandler = function(event){
  event.preventDefault()

  var emailValue = event.target.elements.email.value;
  var passwordValue = event.target.elements.password.value;

  if(!emailValue || !passwordValue){
    alert('Поле не заполнено');
  } else if (passwordValue && passwordValue.length < 10){
    alert('Пароль должен содержать не менее 10 символов');
  };
};

var buttonSubmitHandler = function(){
  event.stopPropagation()
};

form.addEventListener('submit', formSubmitHandler);
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



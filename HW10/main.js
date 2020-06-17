'use strict'

const requestForUsers = function(success, error, url){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', "https://randomuser.me/api/?results=3&gender" + url);
  xhr.onreadystatechange = function(){

    if(this.readyState == 4){
      if (xhr.status >= 200 && xhr.status < 300){
        success((JSON.parse(xhr.response)));
      } else{
        error({
          code: xhr.status,
          message: xhr.responseText
        });   
      }
    }
  }

  xhr.send();
};

requestForUsers(
  function(x){
    console.log(x);
  },
  function(y){
    console.log(y);
  },
  "=female"
);

requestForUsers(
  function(x){
    console.log(x);
  },
  function(y){
    console.log(y);
  },
  "=male"
);



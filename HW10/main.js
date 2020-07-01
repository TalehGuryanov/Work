'use strict'

const container = document.getElementsByClassName('container')[0];
const preloader = document.getElementById('cube-loader');
let maleUsers = [];
let femaleUsers = [];
const requestForUsers = function(method, body = null, url){
  return fetch("https://randomuser.me/api/?results=3&gender" + url)
    .then(res => {
      return res.json()
    })
};

setTimeout(function(){
  requestForUsers('GET', "=female")
  .then(function({results}){
    console.log(results);
    maleUsers = results;
    if(maleUsers.length && femaleUsers.length){
      getUsersData()
    }
  },)
}, 1000);

setTimeout(function(){
  requestForUsers('GET', "=male")
  .then(function({results}){
    console.log(results);
    femaleUsers = results;
    if(maleUsers.length && femaleUsers.length){
      getUsersData()
    }
  },)
}, 1000);


let getUsersData = function(){
  let allUsers = maleUsers.concat(femaleUsers);
  let ul = document.createElement('ul');
  ul.classList.add('inner_list')

  for(let key of allUsers){
    const li = document.createElement('li');

    li.classList.add('list_item');

    li.innerHTML = `
      <div class="list_content">
        <button type="button" class="cross_button">        
        </button>
        <div class="user_img">
          <img class="img" src="${key.picture.large}" alt="User Image">
        </div>
        <div class="user_data">
          <h4>Hi, My name is</h4>
          <p class="user_name"> ${key.name.first} ${key.name.last}</p>
          <a class="user_email" href="#">${key.email}</a>
        </div>
      </div>`;
    ul.appendChild(li);
   }
  container.appendChild(ul);

  preloader.classList.add('_visible');

}


// const body = {
//   id: idUsers.id
// }

const deleteUserData = function(method, body = null){
  const headers = {
    'Content-type': 'application/json'
  };


  return fetch('https://httpstat.us/200',{
    method: method,
    headers: headers,
    body: JSON.stringify(body)
  })
    .then(res => {
      return res.json()
    })
};


requestForUsers('POST')
  .then(function(){
    removeUserData();
  })

function removeUserData() {
  let ul = document.querySelector('.inner_list');
  console.log(ul)

  ul.addEventListener('click', function (e) {

    if (e.target.parentNode) {
      e.target.parentNode.remove(e);
    }
    })
    
}
'use strict'

const container = document.getElementsByClassName('container')[0];
const preloader = document.getElementById('cube-loader');

function requestForUser(url) {
  return fetch('https://randomuser.me/api/?results=3&gender' + url);
}

function sendRequest(url, body) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  });
}

Promise.all([
  requestForUser('=male'),
  requestForUser('=female')
])
  .then(
    res => {
      const users = res.map(item => item.json());

      return Promise.all(users);
    }
  )
  .then(
    res => {
      console.log('Raw Data: ', res);
      
      const [male, female] = res;
      const union = [
        ...male.results,
        ...female.results
      ];
      
      console.log('Union of the arrays: ', union);

      getUsersData(union);
      assignListener();
    }
  )
  .finally(() => preloader.classList.add('_visible'));


let getUsersData = function(x){
  let ul = document.createElement('ul');
  ul.classList.add('inner_list')

  for(let key of x){
    const li = document.createElement('li');

    li.classList.add('list_item');

    li.innerHTML = `
      <div class="list_content">
        <button type="button" class="cross_button">        
        </button>
        <div class="user_img ${key.gender === 'male' ? '': '_female'}">
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
}

let ul = document.querySelector('.inner_list');
let li = document.querySelectorAll('li');

function assignListener() {
	const usersList = document.querySelector('ul');

	usersList.addEventListener('click', e => {
		if (e.target.tagName.toLowerCase() === 'button') {
			removeListItem(e.target);
		}
	});
}


function removeListItem(element){

  preloader.classList.toggle('_visible');

  sendRequest('https://httpstat.us/200', {id: union.login})
    .then(res=>res.text())
    .then(res=>{
      console.log(res)

      element.parentNode.parentNode.remove();
    
    })
    .finally(() => preloader.classList.toggle('_visible'));
}
'use strict'

import {requestUsers, requestCountries} from './main.js'

requestUsers(function(arr1){
  
  requestCountries(function(arr2){
  
    const newArray = arr1.map(function(item){

      const {country} = arr2.find(el => el.userId === item.id);

      return{
        ...item, country
      };
    });
     console.log(newArray)

     printHtml(newArray);
      
   });  
});

function printHtml(arr3){

  const ul = creatList();

  for(let key of arr3){
    const li = creatListItem(key);    
   
    ul.appendChild(li);
 };
  
  document.body.appendChild(ul); 
};

function creatList(){
  return document.createElement('ul');
};

function creatListItem({firstName, lastName, country }){
  const li = document.createElement('li');

  li.innerText =  `${firstName}, ${lastName}, ${country}`;

  return li
};


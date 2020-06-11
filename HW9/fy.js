'use strict'

requestUsers(function(arr1){
  
  requestCountries(function(arr2){
  
    const newArray = [];
        
    arr1.reduce(function(acc, item){
      for(let key of arr2){
        if (key.userId === item.id){
          item.country = key.country
        }
      } newArray.push(item);
      return newArray
    }, newArray); 

    console.log(newArray);
    
    const ul = creatList();
    
    for(let key of newArray){
      const li = creatListItem(key);    
     
      ul.appendChild(li);
   };
    
    document.body.appendChild(ul);     
   });  
});

function creatList(){
  return document.createElement('ul');
};

function creatListItem({firstName, lastName, country }){
  const li = document.createElement('li');

  li.innerText =  `${firstName}, ${lastName}, ${country}`;

  return li
};

import {requestUsers, requestCountries} from './main.js'
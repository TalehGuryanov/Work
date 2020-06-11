'use strict'

export const requestUsers = function(x){
  const users = [
 {
   id: 1,
   firstName: 'Chloe',
   lastName: 'Snyder'
 },  
 {
   id: 44,
   firstName: 'Valdemar',
   lastName: 'Larsen'
 },
 {
   id: 342,
   firstName: 'Curtis',
   lastName: 'Garza'
 },
 {
   id: 2,
   firstName: 'Sedef',
   lastName: 'Sezek'
 },
 {
   id: 24,
   firstName: 'Emile',
   lastName: 'Taylor'
 }
];
 
  setTimeout(function(){
   x(users)
 }, 0)
  
};


export const requestCountries = function(x){
 
 const countries = [
 {
   userId: 44,
   country: 'Germany'
 },
 {
   userId: 1,
   country: 'Canada'
 },
 {
   userId: 342,
   country: 'Brazil'
 },
 {
   userId: 24,
   country: 'Denmark'
 },
 {
   userId: 2,
   country: 'Ireland'
 }
];
 
 
 setTimeout(function(){
   x(countries)
 }, 1000)
 
};


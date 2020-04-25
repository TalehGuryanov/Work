"use strict"

let cyclistsData = [
  {
    distanceKm: 150,
    tHours: 70
  },
  {
    distanceKm: 170,
    tHours: 80
  },
  {
    distanceKm: 200,
    tHours: 90
  },
  {
    distanceKm: 490,
    tHours: 90
  },
  {
    distanceKm: 190,
    tHours: 30
  }
];


let calculateVelocity = function(hours, distance){
  let vKmh = distance / hours;
 return vKmh;
};

for (let i = 0; i < cyclistsData.length; i++){

  let v = calculateVelocity(
    cyclistsData[i].tHours,
    cyclistsData[i].distanceKm
  )
  console.log (v);
}
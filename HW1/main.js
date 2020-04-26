var carsData = [
  {
    distanceKm: 200,
    timeMin: 30
  },
  {
    distanceKm: 250,
    timeMin: 45
  },
  {
    distanceKm: 354,
    timeMin: 33
  },
  {
    distanceKm: 188,
    timeMin: 29
  }
]

function calculateVelocity(distance, minutes){
  var timeHour = minutes / 60;
  var vKmH = distance / timeHour;

  return vKmH;

};

var maxV = 0;

for (i = 0; i < carsData.length; i++){
  var distanceKm = carsData[i].distanceKm;
  var timeMin = carsData[i].timeMin;
  var currentVkmH = calculateVelocity(distanceKm, timeMin);

  if (currentVkmH > maxV){
    maxV = currentVkmH;
  }
};

console.log(maxV);
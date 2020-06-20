var cemetry = document.getElementsByClassName('b-shooter')[0];
var aimShooter = document.getElementsByClassName('b-shooter__aim')[0];
var aimShooterImg = document.getElementsByClassName('b-shooter__img-aim')[0];
var ghost = document.getElementsByClassName('b-shooter__img-ghost')[0];
var clickHandler = function(e){
  var x = e.offsetX - aimShooter.offsetWidth/2 - 50;
  var y = e.offsetY - aimShooter.offsetHeight/2 - 100;

  if ( x < 0){ 
    x = -50;
  } else if(x + aimShooter.offsetWidth + 50 > cemetry.offsetWidth){
    x = cemetry.offsetWidth - aimShooter.offsetWidth - 50;
  };
  if ( y < 0){ 
    y = -100;
  } else if ( y + aimShooter.offsetHeight + 100 > cemetry.offsetHeight){
    y = cemetry.offsetHeight - aimShooter.offsetHeight - 100;
  };

  aimShooter.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
};

var keyDownHandler = function(e){

  if (e.code === 'Enter') {
    aimShooterImg.style.transform = 'scale(.9)';
  } else {
    return;
  }
};

var keyUpHandler = function(e){

  if (e.code === 'Enter') {
    aimShooterImg.style.transform = '';
  } else {
    return;
  }

  var rect = aimShooterImg.getBoundingClientRect();
  var aimCenterX = rect.left + rect.width/2;
  var aimCenterY = rect.top + rect.height/2;
  console.log(aimCenterX, aimCenterY);

};

var setRandomCoors = function(e){

  var left = Math.floor(Math.random() * 1000);
  var top = Math.floor(Math.random() * 1000);

  if ( left < 0){ 
    left = 0;
  } else if(left + ghost.offsetWidth > cemetry.offsetWidth){
    left = cemetry.offsetWidth - ghost.offsetWidth;
  };
  if ( top < 0){ 
    top = 0;
  } else if ( top + ghost.offsetHeight > cemetry.offsetHeight){
    top = cemetry.offsetHeight - ghost.offsetHeight;
  };

  ghost.style.left = left + 'px';
  ghost.style.top = top + 'px';

  if(ghost.style.display = 'none'){
       ghost.style.display = '';
  }
};


var setRandomCoorsInterval = setInterval(setRandomCoors, 3000);

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
cemetry.addEventListener('click', clickHandler);


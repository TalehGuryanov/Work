var cemetry = document.getElementsByClassName('b-shooter')[0];
var aimShooter = document.getElementsByClassName('b-shooter__aim')[0];
var aimShooterImg = document.getElementsByClassName('b-shooter__img-aim')[0];
var clickHandler = function(e){
  var x = e.offsetX - aimShooter.offsetWidth/2;
  var y = e.offsetY - aimShooter.offsetHeight/2;

  if ( x < 0){ 
    x = 0;
  } else if(x + aimShooter.offsetWidth > cemetry.offsetWidth){
    x = cemetry.offsetWidth - aimShooter.offsetWidth;
  };
  if ( y < 0){ 
    y = 0;
  } else if ( y + aimShooter.offsetHeight > cemetry.offsetHeight){
    y = cemetry.offsetHeight - aimShooter.offsetHeight;
  };

  aimShooter.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
};

var keyDownHandler = function(e){
var isEnterDown = e.code === 'Enter';

  if (isEnterDown) {
    aimShooterImg.style.transform = 'scale(.9)';
  } else {
    return;
  }
};

var keyUpHandler = function(e){
var isEnterUp = e.code === 'Enter';

  if (isEnterUp) {
    aimShooterImg.style.transform = '';
  } else {
    return;
  }
};

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
cemetry.addEventListener('click', clickHandler);


'use strict';

const cemetry = document.getElementsByClassName('b-shooter')[0];
const aimShooter = document.getElementsByClassName('b-shooter__aim')[0];
const aimShooterImg = document.getElementsByClassName('b-shooter__img-aim')[0];
const ghost = document.getElementsByClassName('b-shooter__img-ghost')[0];
const fire = document.getElementsByClassName('b-shooter__img-fire')[0];
const progressIcon = document.getElementsByClassName('b-shooter__progress-icon');
const healthIcon = document.getElementsByClassName('b-shooter__health-icon');
const healthIconBar = document.getElementsByClassName('b-shooter__health')[0];
const progressBar = document.querySelector('.b-shooter__progress');
const delayToReset = 500;
let isGameOver = false;
const shooterGameOver = document.querySelector('.b-shooter__game-over');
const shooterGameOverTitle = document.querySelector('.b-shooter__game-over-title');

let clickHandler = (e) => {
  e.preventDefault();

  if(ghost.style.animationPlayState ==='paused' || isGameOver == true){
    return
  };

  const x = e.offsetX - aimShooter.offsetWidth/2;
  const y = e.offsetY - aimShooter.offsetHeight/2;

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

const keyDownHandler = (e) => {

  if (e.code === 'Space' && isGameOver) {
    e.preventDefault();
    aimShooterImg.style.transform = 'scale(.9)';
  }
};

const keyUpHandler = (e) => {
  e.preventDefault();

  if((e.code === 'Enter' || e.code === 'NumpadEnter') && isGameOver){
    return reset();

  } else if(e.code !== 'Space' || isGameOver) {
    return;
  }

  if (e.code === 'Space'  && !isGameOver) {
      aimShooterImg.style.transform = '';
  
      const rect = aimShooterImg.getBoundingClientRect();
      const aimCenterX = rect.x + rect.width/2;
      const aimCenterY = rect.y + rect.height/2;
      const ghoostGoords = ghost.getBoundingClientRect();

      if (
        aimCenterX <= ghoostGoords.right - 20
        && aimCenterX >= ghoostGoords.x + 20
        && aimCenterY >= ghoostGoords.y - 20
        && aimCenterY <= ghoostGoords.bottom + 20
      ){
        let animationProperties = `opacity: 0;
          transition-duration: ${delayToReset * 0.6}ms;
          transition-delay: ${delayToReset * 0.4}ms;`;

        fire.style.visibility = 'visible';
        fire.style.cssText += animationProperties;
        ghost.style.animationPlayState = 'paused';
        ghost.style.cssText += animationProperties;
        aimShooterImg.style.display = 'none';

        markProgress();

        setTimeout(() => {
          if(isGameOver) {
            dropTheCurtain(true);

          } else {
            fire.removeAttribute('style');
            fire.style.visibility = 'hidden';
            aimShooterImg.style.display = '';
            ghost.removeAttribute('style');
            ghost.style.display = 'none';
          }
        }, delayToReset);
      };

  } else return
};

  let setRandomCoors = (e) => {

    let left = Math.floor(Math.random() * (cemetry.offsetWidth - ghost.offsetWidth) +1);
    let top = Math.floor(Math.random() * (cemetry.offsetHeight - ghost.offsetHeight) +1);

    console.log(left, top)
    ghost.style.left = left + 'px';
    ghost.style.top = top + 'px';
};

let setRandomCoorsInterval = setInterval(() => {
  if (ghost.style.animationPlayState ==='paused') {
    return
  } 
  
  if (ghost.style.display === 'none'){
      ghost.style.display = '';
      setRandomCoors();
      
  } else {
    setRandomCoors();
    markLifeStatus();
  }
}, 3000);

let markLifeStatus = () => {

  if(healthIconBar.classList.contains('_loss-bar')){
    isGameOver = true;
    dropTheCurtain(false);
    return;
  };

  for( let i = 0; i < healthIcon.length; i++){
    if(!healthIcon[i].classList.contains('_loss')){
      healthIcon[i].classList.add('_loss');

      if(i === healthIcon.length-1){
        healthIconBar.classList.add('_loss-bar')
      };

      break;

    };
  };
};

const markProgress = () => {
  
  for( let i = 0; i < progressIcon.length; i++){
    if(!progressIcon[i].classList.contains('_score')){
      progressIcon[i].classList.add('_score');

      if(i === progressIcon.length-1){
        isGameOver = true;
      };

      break;

    };
  };
};

const dropTheCurtain = (isWin) => {
  if(isWin) {
    cemetry.classList.add('_win');
    shooterGameOverTitle.innerText = 'You Win';

  }  else {
    cemetry.classList.add('_lose');
    shooterGameOverTitle.innerText = 'You Lose';
    ghost.removeAttribute('style');
    aimShooterImg.style.display = 'none';
  }
 }

const reset = () => {
  isGameOver = false;
  healthIconBar.classList.remove('_loss-bar');
  cemetry.classList.remove('_win');
  cemetry.classList.remove('_lose');
  ghost.removeAttribute('style');
  ghost.style.display = ('none');
  fire.removeAttribute('style');
  aimShooterImg.removeAttribute('style');
  healthIconBar.style.display = '';
  progressBar.style.display = '';
  aimShooterImg.style.display = '';

  for (let i = 0; i < progressIcon.length; i++) {
    if (progressIcon[i].classList.contains('_score')) {
        progressIcon[i].classList.remove('_score');
    };
  };

  for (let i = 0; i < healthIcon.length; i++) {
      if (healthIcon[i].classList.contains('_loss')) {
          healthIcon[i].classList.remove('_loss');
      };
  };
}

document.body.addEventListener('keydown', keyDownHandler);
document.body.addEventListener('keyup', keyUpHandler);
cemetry.addEventListener('click', clickHandler);



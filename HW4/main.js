


var universe = document.getElementsByClassName('b-universe')[0];
var planetEarth = document.getElementsByClassName('b-universe__img')[0];
var clickHandler = function(e){ 
  var x = e.offsetX - planetEarth.offsetWidth/2;
  var y = e.offsetY - planetEarth.offsetHeight/2;

  if (planetEarth.style.display === 'none') {
    return planetEarth.style.display = '';
  };
  if (e.target.tagName.toLowerCase() === 'img') {
    return planetEarth.style.display = 'none';
  };
  if ( x < 0){ 
    x = 0
  } else if(x + planetEarth.offsetWidth > universe.offsetWidth){
    x = universe.offsetWidth - planetEarth.offsetWidth
  };
  if ( y < 0){ 
    y = 0
  } else if ( y + planetEarth.offsetHeight > universe.offsetHeight){
    y = universe.offsetHeight - planetEarth.offsetHeight
  };

  planetEarth.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
};


universe.addEventListener('click', clickHandler);




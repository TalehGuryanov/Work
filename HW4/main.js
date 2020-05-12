


var universe = document.querySelector('div');
var planetEarth = document.querySelector('img');
var clickHandle = function(e){
  
  var x = e.offsetX - planetEarth.offsetWidth/2;
  var y = e.offsetY - planetEarth.offsetHeight/2;

  if ( x < 0){ x = 0};

  if ( y < 0){ y = 0};

  if ( x + planetEarth.offsetWidth > universe.offsetWidth){
    x = universe.offsetWidth - planetEarth.offsetWidth
  };

  if ( y + planetEarth.offsetHeight > universe.offsetHeight){
    y = universe.offsetHeight - planetEarth.offsetHeight
  };

  if (planetEarth.style.display === 'none') {
    return planetEarth.style.display = '';
  };

  if (e.target.tagName.toLowerCase() === 'img') {
    return planetEarth.style.display = 'none';
  };

  planetEarth.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

};

universe.addEventListener('click', clickHandle);



var counter = 1;
var interval = 5000;
setInterval(function(){

  document.getElementById('radio1').addEventListener('click', function() {
    if (this.checked) {
      counter = 1;
    }
  });
  document.getElementById('radio2').addEventListener('click', function() {
    if (this.checked) {
      counter = 2;
    }
  });
  document.getElementById('radio3').addEventListener('click', function() {
    if (this.checked) {
      counter = 3;
    }
  });
  document.getElementById('radio4').addEventListener('click', function() {
    if (this.checked) {
      counter = 4;
    }
  });
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, interval);


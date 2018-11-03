function restarting(){
  document.getElementById('inp').value = '';
}

var begin = true;

function button_press(num = ''){
  if (begin) {
    restarting();
  }
  begin = false;
  document.getElementById('inp').value += String(num);
}

function getResult(){
  const formule = document.getElementById('inp').value;
  document.getElementById('inp').value += "=" + eval(formule);
  begin = true;
}

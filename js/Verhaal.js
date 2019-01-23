var button = document.querySelector('body.voetbalanalisten main button');
console.log(button);

var knop = document.querySelector('header nav li a svg#opgeslagen');

function opslaan(){
  console.log(button);
  if (button.classList.value==''){
    button.classList.add('gif');
  setTimeout(function(){
    button.classList.remove('gif');
    button.classList.toggle('done');
    knop.classList.add('knop');
  },2000);}
  else if (button.classList.value=='done') {
    button.classList.remove('done');
    knop.classList.remove('knop');
  }
}

button.addEventListener('click', opslaan);

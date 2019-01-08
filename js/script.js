var filter = document.querySelector('main form input:first-of-type');
var form = document.querySelector('main>form');

function formSubmit(){
  form.submit();
}
filter.addEventListener('click', formSubmit);

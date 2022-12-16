let heightMax = 200;
let listElm = document.querySelector('#infinite-list');
listElm;addEventListener('scroll', function() {
  if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
  }
});
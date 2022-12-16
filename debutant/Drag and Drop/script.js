dragElement(document.querySelector('#carré'));

function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if(document.getElementById(element.id + 'body')) {
        document.getElementById(element.id + 'body').onmousedown = dragMouseDown;
    }
    else {
        element.onmousedown = dragMouseDown;
      }
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
      }
}
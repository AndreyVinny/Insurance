let doc = document.querySelector('body');
let size = '350px';
if(doc.clientWidth >= 1440){
  size = '280px';
} else if(doc.clientWidth >= 900){
  size = '250px';
} else if(doc.clientWidth >= 720){
  size = '330px';
} else {
  size = '270px';
}

const init = function(){
  let items = document.querySelectorAll('.info_box');
  for (let i = 0; i < items.length; i++){
    items[i].style.minWidth =  size;
  }
  // items.forEach(elem => return elem.style.minWidth = size);
  
}

init();

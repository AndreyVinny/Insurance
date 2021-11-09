let info = document.querySelectorAll('.main_info');

let info1 = document.querySelector('.info_text1');
let info2 = document.querySelector('.info_text2');
let info3 = document.querySelector('.info_text3');
let info4 = document.querySelector('.info_text4');
let info5 = document.querySelector('.info_text5');

let drop1 = document.querySelector('.down_test1');
let drop2 = document.querySelector('.down_test2');
let drop3 = document.querySelector('.down_test3');
let drop4 = document.querySelector('.down_test4');
let drop5 = document.querySelector('.down_test5');


info.forEach(elem => elem.addEventListener('click', DropDown));

function DropDown (event) {
  console.log(event.currentTarget.dataset.name);
  switch (event.currentTarget.dataset.name) {
    case 'first':
      info1.classList.toggle('active');
      drop1.classList.toggle('active');
    break;
    case 'second':
      info2.classList.toggle('active');
      drop2.classList.toggle('active');
    break;
    case 'third':
      info3.classList.toggle('active');
      drop3.classList.toggle('active');
    break;
    case 'fourth':
      info4.classList.toggle('active');
      drop4.classList.toggle('active');
    break;
    case 'fifth':
      info5.classList.toggle('active');
      drop5.classList.toggle('active');
    break;
    default: return
  }
}

let menu = document.querySelector('.nav_box'),
    burger = document.querySelector('.ham_menu'),
    body = document.querySelector('body');


burger.addEventListener('click', AddActive)

function AddActive () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
}

let navLink = document.querySelectorAll('.nav_item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.toggle('active');

}

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

let happenBox = document.querySelectorAll('.happen_box_name');
let presentation = document.querySelector('.presentation');

let happenBox1 = document.querySelector('.happen_box_name1');
let happenBox2 = document.querySelector('.happen_box_name2');
let happenBox3 = document.querySelector('.happen_box_name3');
let happenBox4 = document.querySelector('.happen_box_name4');

let info_block1 = document.querySelector('.info_block_1');
let info_block2 = document.querySelector('.info_block_2');
let info_block3 = document.querySelector('.info_block_3');
let info_block4 = document.querySelector('.info_block_4');

happenBox.forEach(elem => elem.addEventListener('click', Happen));

function Happen (event) {
  console.log(event.currentTarget.dataset.name);
  switch (event.currentTarget.dataset.name) {
    case 'first_name':
      info_block1.classList.toggle('active');
      info_block2.classList.remove('active');
      info_block3.classList.remove('active');
      info_block4.classList.remove('active');
      presentation.style.marginTop = '70px';
    break;
    case 'second_name':
      info_block1.classList.remove('active');
      info_block2.classList.toggle('active');
      info_block3.classList.remove('active');
      info_block4.classList.remove('active');
      presentation.style.marginTop = '180px';
    break;
    case 'third_name':
      info_block1.classList.remove('active');
      info_block2.classList.remove('active');
      info_block3.classList.toggle('active');
      info_block4.classList.remove('active');
      presentation.style.marginTop = '130px';
    break;
    case 'fourth_name':
      info_block1.classList.remove('active');
      info_block2.classList.remove('active');
      info_block3.classList.remove('active');
      info_block4.classList.toggle('active');
      presentation.style.marginTop = '100px';
    break;
    default: return
  }
}

const prevBtns = document.querySelectorAll('.btn_prev');
const nextBtns = document.querySelectorAll('.btn_next');
const progress = document.getElementById('progress');
const formStep = document.querySelectorAll('.form_step');
const progressSteps = document.querySelectorAll(".progress_step");
const checkbox = document.getElementById('checkbox');

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", event => {
    event.preventDefault()
    formStepsNum++;
  if (formStepsNum == 1) {
    updateFormSteps();
    updateProgressbar();
  } else if (formStepsNum == 2) {
        if (checkbox.checked) {
          alert("Данные отпралвены. С вами свяжуться в ближайшее время.");
          document.getElementById("form").reset();
          formStepsNum = 0;
        } else {
          alert("Нужно приянть условия ифнормации.");
          formStepsNum = 1;
        }
      }
    });
});


prevBtns.forEach((btn) => {
  btn.addEventListener("click", event => {
    event.preventDefault()
    formStepsNum--;
    console.log(formStepsNum);
    if (formStepsNum == -1) {
      document.getElementById("form").reset();
      formStepsNum = 0;
    } else {
      updateFormSteps();
      updateProgressbar();
    }
  });
});

function updateFormSteps() {
      formStep.forEach(formStep => { formStep.classList.toggle('active')});
};

function updateProgressbar() {
    progressSteps.forEach( progressStep => { progressStep.classList.toggle('active')});
};


function doalert() {
  if (checkbox.checked) {
    alert("Отправляя обращение, Вы соглашаетесь на обработку ваших персональных данных.")
  } else {
    alert("Потвередите наше соглашенеи что бы продолжить.")
  }
}


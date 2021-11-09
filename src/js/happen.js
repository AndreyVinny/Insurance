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

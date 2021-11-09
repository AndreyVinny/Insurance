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

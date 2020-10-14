/*
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  col

document.addEventListener("DOMContentLoaded", function() {
  cargarListeners();
});

function cargarListeners(){
  const array = document.getElementsByClassName('form-question__question');
  const questions = [...array];
  questions.forEach(question => {
    [...question.getElementsByTagName('span')].forEach(spanQuestion => {
      spanQuestion.addEventListener('click',function(){
        console.dir(`${question}`)
      });
    });
    

  });
}
*/

document.addEventListener("DOMContentLoaded", function() {
  cargarListeners();
});

function cargarListeners(){
  const $divQuestions = document.getElementsByClassName('form-question__question');
  const $arrow = document.getElementById('arrow');
  [...$divQuestions].forEach(divQuestion => {
    divQuestion.childNodes[1].addEventListener('click', function(){
      divQuestion.classList.toggle('active');
      divQuestion.parentElement.childNodes[3].classList.toggle('hidden');
      // console.log(divQuestion.classList.className);
      divQuestion.childNodes[3].style.transform = "rotate(180deg)";

      if(divQuestion.classList.contains('active')){
        divQuestion.childNodes[3].style.transform = "rotate(180deg)";      
      }else{
        divQuestion.childNodes[3].style.transform = "rotate(-360deg)";
      }
    });
  });
}
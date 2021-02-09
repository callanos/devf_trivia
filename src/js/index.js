import '../css/bootstrap.min.css';
import '../css/style.css';

import QuestionSelect from './QuestionSelect';
import NavBar from './NavBar';
import Trivia from './Trivia';
import Questions from "./Questions";

const _qs = QuestionSelect ();
const _navBar = NavBar();
const questionsCls = new Questions();
const trivia = new Trivia({
  questions: questionsCls.questions,
  questionsContainer: document.querySelector("#questionsContainer"),
  resultContainer: document.querySelector("#result")
});

const sumbitEl = document.querySelector("#submit");
const startEl = document.querySelector("#start");

startEl.addEventListener('click', (event) => {
  
    questionsCls.selectedCat = document.getElementById("category").value;
    questionsCls.selectedDif = document.getElementById("difficulty").value;
    questionsCls.selectedTyp = document.getElementById("type").value;    
    questionsCls.getDataForm();
    //console.log(questionsCls.questions[1]);
    setTimeout(()=>{
      trivia.init();
      event.target.classList.add('hide');
      sumbitEl.classList.remove("hide");
    }, 1000);

})

sumbitEl.addEventListener("click", (event) => {
    trivia.collectUserAnswers();
    event.target.classList.add('hide');
    startEl.classList.remove("hide");


});


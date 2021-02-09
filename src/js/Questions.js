import axios from 'axios';

export default class Questions {
    constructor() {
        this.selectedCat = 0;
        this.selectedDif = '';
        this.selectedTyp = '';

        this.questions = [
          {
            title: "The query did not return results",
            answers: { a: 'a', b: 'b', c: 'c', d: 'd' },
            correctAnswer: "c"
          }
        ];
    }

      getDataForm(){
          axios.get(`https://opentdb.com/api.php?amount=10&category=${this.selectedCat}&difficulty=${this.selectedDif}&type=${this.selectedTyp}`)
          .then(response => {

            //console.log(response);
            response.data.results.map((elemento, i) => {

              this.questions[i]={
                title: elemento.question,
                answers: { 
                  a: elemento.correct_answer, 
                  b: elemento.incorrect_answers[0], 
                  c: elemento.incorrect_answers[1], 
                  d: elemento.incorrect_answers[2] 
                },
                correctAnswer: "a"

              }

              console.log(this.questions[i]);
              return this.questions;
              //console.log(i,elemento)
            }
      
            )//close map
        })//.then
          .catch(error => {
              console.log(error);
          })
      }
      
      setTriviaValues( question ){
        this.apiQuestions = question;

      }
    
}





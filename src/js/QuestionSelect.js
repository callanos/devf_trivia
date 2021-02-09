import axios from 'axios';

export default function QuestionSelect (){
    axios.get('https://opentdb.com/api_category.php')
    .then(response => {
     
        //console.log(response.data.trivia_categories);
        //**Extraemos lista de categorías
        let formOptions = `
            <form>
            <fieldset>
            <legend>Choose your Options</legend>
            <div class="row" >
            <div class="form-group col-sm-4" >
            <label for="category">Select Category:</label>
            <select class="form-control" id="category">
                <option selected="">Open this select menu</option>
        `;
        response.data.trivia_categories.map((elemento) => {

        //return elemento.category;
        //console.log(elemento.name)
        formOptions += `
            <option value="${elemento.id}">${elemento.name}</option>
        `;
        })//close map

        formOptions += `
            </select>
        </div>
        <div class="form-group col-sm-4">
            <label for="difficulty">Select Difficulty:</label>
            <select class="form-control" id="difficulty">
                <option selected="">Open this select menu</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">hard</option>
              </select>
        </div>
        <div class="form-group col-sm-4">
            <label for="type">Select Type:</label>
            <select class="form-control" id="type">
                <option selected="">Open this select menu</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
            </select>
        </div>
        </div>
        </fieldset>
        </form>`;

        document.getElementById("questionsSelect").innerHTML=formOptions;
        //console.log(formOptions);

    })
    .catch(error => {
        console.log(error);
    })
}

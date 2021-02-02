import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  // Este método es inseguro/unsafe y ya no se ocupa
    constructor(props) {
      super(props);
      this.state = {
          dataTrivia: {},
      };
}

/*
  componentWillMount() {
    //console.log('Yo me debería ejecutar en el lugar: 0');
  } 
*/
  componentDidMount(){
    axios
    .get(`https://opentdb.com/api.php?amount=10`)
    .then((response) => {
      //console.log(response);

      let triviaResults = {};

      triviaResults = response.data.results.map((elemento) => {
          return elemento;
        })//close map
      
      //this.setState({dataTrivia: triviaResults});
      //console.log(this.state.dataTrivia);

      const dataArr = new Set(triviaResults.category);
      let result = [...dataArr];
      //this.setState({categoria: result});
      console.log(result);
      
    })//close .then  

  .catch((error)=>{
      console.log(error);
    })
    //console.log('Yo me debería ejecutar en el lugar: 2');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('Hola, soy el shouldComponentUpdate ejecutandome :D',nextProps, nextState);
    return true;
  }

render() {
  //console.log('Yo me debería ejecutar en el lugar: 1');
  return (
    <div className="App">
      <div className="triviaForm">
        Categoría
        <select name="categorias" className="selectControl">
          {/*this.state.categoria.map((elemento,i)=>(
            <option key= {i} value={elemento}>{elemento}</option>
          )
          )*/}
        </select>
        Dificultad
        <select name="dificultad" className="selectControl">
          {/*this.state.dificultad.map((elemento,i)=>(
            <option key= {i} value={elemento}>{elemento}</option>
          )
          )*/}
        </select>
        Tipo Pregunta
        <select name="tipoPregunta" className="selectControl">
          {/*this.state.tipo.map((elemento,i)=>(
            <option key= {i} value={elemento}>{elemento}</option>
          )
          )*/}
        </select>
      </div>
    </div>);//close return
}
}

export default App;

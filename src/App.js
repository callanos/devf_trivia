import React from 'react';
import FormApi from './components/FormApi';
//import ImageCard from './components/ImageCard';
//import Search from './components/Search';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// 1 .- (Search) Escribir el buscador 
// 2 .- (App) Pedirle la información a giphy
// 3 .- (App) Mostrar el resultado en las cards
class App extends React.Component {
  // Este método es inseguro/unsafe y ya no se ocupa
    constructor(props) {
      super(props);
      this.state = {
          categoria: [],
          dificultad: [],
          tipo: []
      };
}

  componentWillMount() {
    console.log('Yo me debería ejecutar en el lugar: 0');
  } 

  componentDidMount(){
    axios
    .get(`https://opentdb.com/api.php?amount=10`)
    .then((response) => {
    console.log(response);
    //const arregloDeTrivias = results.map(elemento => {
    //const trivia = elemento;
    this.setState({categoria: response.data.results})
    console.log(this.state.categoria);
    //});
    })
    .catch((error)=>{
      console.log(error);
    })
    console.log('Yo me debería ejecutar en el lugar: 2');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('Hola, soy el shouldComponentUpdate ejecutandome :D',nextProps, nextState);
    return true;
  }

render() {
  console.log('Yo me debería ejecutar en el lugar: 1');
  return (
    <div className="App">
      <div className="triviaForm">
        Categoría
        <select name="categorias" className="selectControl">
          {this.state.categoria.map(elemento=>(
            <option value={elemento.category}>{elemento.category}</option>
          )
          )}
        </select>
        Dificultad
        <select name="categorias" className="selectControl">
          {this.state.categoria.map(elemento=>(
            <option value={elemento.difficulty}>{elemento.difficulty}</option>
          )
          )}
        </select>
        Tipo Pregunta
        <select name="categorias" className="selectControl">
          {this.state.categoria.map(elemento=>(
            <option value={elemento.type}>{elemento.type}</option>
          )
          )}
        </select>


      </div>
    </div>);
}
}

export default App;

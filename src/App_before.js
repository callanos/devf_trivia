import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FormApi from './components/FormApi';

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

/*
  componentWillMount() {
    //console.log('Yo me debería ejecutar en el lugar: 0');
  } 
*/
  componentDidMount(){
    axios
    .get(`https://opentdb.com/api.php?amount=50`)
    .then((response) => {
      //console.log(response);

      let dataArrState =  response.data.results.map((elemento) => {
      return elemento.category;
      })//close map

      let dataArr = new Set(dataArrState);
      let stateArr = [...dataArr];
      this.setState({categoria: stateArr});
      //console.log(this.state.categoria);

      dataArrState =  response.data.results.map((elemento) => {
        return elemento.type;
      })//close map

      dataArr = new Set(dataArrState);
      stateArr = [...dataArr];
      this.setState({tipo: stateArr});
      //console.log(this.state.tipo);

      dataArrState =  response.data.results.map((elemento) => {
        return elemento.difficulty;
      })//close map

      dataArr = new Set(dataArrState);
      stateArr = [...dataArr];
      this.setState({dificultad: stateArr});
      //console.log(this.state.dificultad);

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
        <FormApi/>
{/*
        <div className="triviaForm">
          Categoría
          <select name="categorias" className="selectControl">
            {this.state.categoria.map((elemento,i)=>(
              <option key= {i} value={elemento}>{elemento}</option>
            )
            )}
          </select>
          Dificultad
          <select name="dificultad" className="selectControl">
            {this.state.dificultad.map((elemento,i)=>(
              <option key= {i} value={elemento}>{elemento}</option>
            )
            )}
          </select>
          Tipo Pregunta
          <select name="tipoPregunta" className="selectControl">
            {this.state.tipo.map((elemento,i)=>(
              <option key= {i} value={elemento}>{elemento}</option>
            )
            )}
          </select>
        </div>
*/}
      </div>);//close return
  }
}

export default App;

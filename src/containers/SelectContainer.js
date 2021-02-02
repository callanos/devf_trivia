import {Component} from 'react';
import axios from 'axios';
import TriviaSelect from '../components/TriviaSelect';

class SelectContainer extends Component {

        state = {
            dataTrivia: [],
            categoria: [],
            dificultad: [],
            tipo: []
        }


    componentDidMount(){
        axios.get('https://opentdb.com/api.php?amount=10')
        .then(response => {
         
            console.log(response.data.results);
            //**Extraemos lista de categorías
            let dataArrState =  response.data.results.map((elemento) => {
            return elemento.category;
            })//close map
            //**filtramos valores únicos y seteamos state
            let dataArr = new Set(dataArrState);
            let stateArr = [...dataArr];
            this.setState({categoria: stateArr});
            console.log(this.state.categoria);
            
            //**Extraemos lista de tipos de preguntas
            dataArrState =  response.data.results.map((elemento) => {
                return elemento.type;
            })//close map
            //**filtramos valores únicos y seteamos state
            dataArr = new Set(dataArrState);
            stateArr = [...dataArr];
            this.setState({tipo: stateArr});
            //console.log(this.state.tipo);
            
            //**Extraemos lista de nivel de dificultad
            dataArrState =  response.data.results.map((elemento) => {
                return elemento.difficulty;
            })//close map
            //**filtramos valores únicos y seteamos state
            dataArr = new Set(dataArrState);
            stateArr = [...dataArr];
            this.setState({dificultad: stateArr});
            //console.log(this.state.dificultad);

        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){

        const { categoria, tipo, dificultad } = this.state;

        return(
            <>
                <TriviaSelect Categoria={ categoria } Dificultad={ dificultad } Tipo={ tipo } />
            </>

        );
    }
}

export default SelectContainer;
import { Component } from 'react';

class FormApi extends Component {
    constructor(props) {
        super(props);
/*        this.state = {
            categoria: "",
            dificultad: "",
            tipo: ""
        }*/
    }
    
    render() {
        return (
        <div className="search-container">
            Categoría
            <select
                placeholder="Buscar en todos los gifs"
                className="search-input"
            >
                <option>1</option>
            </select>
            Dificultad
            <select
                placeholder="Buscar en todos los gifs"
                className="search-input"
            >
                <option>1</option>
            </select>
            Tipo
            <select
                placeholder="Buscar en todos los gifs"
                className="search-input"
            >
                <option>1</option>
            </select>
        </div>
        );
    }
}
export default FormApi;    
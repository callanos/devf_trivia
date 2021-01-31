import { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoria: ""
        };
    }
    
    render() {
        return (
        <div className="search-container">
            <select
                placeholder="Buscar en todos los gifs"
                className="search-input"
            >
                <option>{this.state.categoria}</option>
            </select>
            <button
                className="search-button"
                onClick={() => {
                    this.props.emitSearch(this.state.searchWord);
                }}
            >
                Buscar
            </button>

        </div>
        );
    }
    /*
    render() {
        return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Buscar en todos los gifs"
                className="search-input"
                value={this.state.searchWord}
                onChange={(evento) => {
                    console.log(evento.target.value)
                    this.setState({searchWord: evento.target.value});
                }}
            />
            <button
                className="search-button"
                onClick={() => {
                    this.props.emitSearch(this.state.searchWord);
                }}
            >
                Buscar
            </button>
        </div>
        );
    }*/
}

export default Search;
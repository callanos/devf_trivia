import { Component } from 'react';

class FormApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoria: [],
            dificultad: [],
            tipo: []
        };
  }
      
    render() {
        return (
          <div className="triviaForm">
            Categoría
            <select name="categorias" className="selectControl">
              {this.state.categoria.map((elemento,i)=>(
                <option key= {i} value={elemento}>{elemento}</option>
              )
              )}
              {console.log(this.state.categoria)}
            </select>
          </div>
        );//close return
            }
}
export default FormApi;    
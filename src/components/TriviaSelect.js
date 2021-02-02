import React,{Fragment} from 'react';

const TriviaSelect = ({ Categoria=[ ], Dificultad=[ ], Tipo=[ ] }) => {
//function TriviaSelect ({ dataTrivia }) {
    return(
        <Fragment>
            <div>
            <div>
                    <label>Categoría:</label>
                    <select name="categorias" className="selectControl">
                        {Categoria.map((elemento,i)=>(
                        <option key= {i} value={elemento}>{elemento}</option>
                        )
                        )}
                    </select>
                </div>
                <div>
                    <label>Dificultad:</label>
                    <select name="dificultad" className="selectControl">
                        {Dificultad.map((elemento,i)=>(
                        <option key= {i} value={elemento}>{elemento}</option>
                        )
                        )}
                    </select>
                </div>
                <div>
                    <label>Tipo Pregunta:</label>
                    <select name="tipoPregunta" className="selectControl">
                        {Tipo.map((elemento,i)=>(
                        <option key= {i} value={elemento}>{elemento}</option>
                        )
                        )}
                    </select>
                </div>
            </div>
        </Fragment>
    );
}

export default TriviaSelect;
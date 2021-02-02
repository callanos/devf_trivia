import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import SelectContainer from './containers/SelectContainer';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Iniciar' component={SelectContainer} />
        </Switch>
    );
}

export default Routes;
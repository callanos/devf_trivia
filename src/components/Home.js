import React from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';
import SelectContainer from '../containers/SelectContainer';
import AppNav from '../components/AppNav';

const Home = () => {
    return(
        <div className="App">
            <AppNav />
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + '/images/FrontEnd.png'} alt="Trivia FrontEnd" />
                <SelectContainer/>
            </header>

        </div>
    
    );//Ends return
}//Ends Home

export default Home;
import React, {Component} from 'react';
import './App.css';
import Apartments from './Apartments/Apartments';
import Reservations from './ReservationsBook/Reservations';
import Header from './Header/Header';
import Home from './HomePage/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div className={"container"}>
                    <Header/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/reservations" component={Reservations}/>
                    <Route path="/apartments" component={Apartments}/>
                </div>
            </Router>
        );
    }
}

export default App;

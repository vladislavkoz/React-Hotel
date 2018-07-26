import React, {Component} from 'react';
import './App.css';
import ReservePanel from './Apartments/ReservePanel';
import Reservations from './ReservationsBook/Reservations';
import Home from './Home/Home'
import Header from './Header/Header';
import ApartmentsPanel from './ApartmentsPanel/ApartmentsPanel'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div className={"container"}>
                    <Header/>
                    <Route  exact path="/" component={Home}/>
                    <Route path="/apartmentsPanel" component={ApartmentsPanel}/>
                    <Route path="/reservations" component={Reservations}/>
                    <Route path="/reservePanel" component={ReservePanel}/>
                    <hr/>
                </div>
            </Router>
        );
    }
}

export default App;

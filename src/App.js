import React, {Component} from 'react';
import './App.css';
import ReservePanel from './Apartments/ReservePanel';
import Reservations from './ReservationsBook/Reservations';
import Home from './Home/Home'
import Header from './Header/Header';
import ApartmentsPanel from './ApartmentsPanel/ApartmentsPanel'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login/Login';
import {Provider} from 'react-redux' 
import store from './store'
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    // Check for expired token
    // const currentTime = Date.now() / 1000;
    // if (decoded.exp < currentTime) {
    //   // Logout user
    //   store.dispatch(logoutUser());
    //   // TODO: Clear current Profile
  
    //   // Redirect to login
    //   window.location.href = '/login';
    // }
  }

class App extends Component {    
    render() {
        return (
            <Provider store={store}>
            <Router>
                <div className={"container"}>
                    <Header/>
                    <Route  exact path="/" component={  Home }/>
                    <Route path="/apartmentsPanel" component={ApartmentsPanel  }/>
                    <Route path="/reservations" component={ Reservations }/>
                    <Route path="/reservePanel" component={ ReservePanel }/>
                    <Route path="/login" component={Login}/>
                    <hr/>
                </div>
            </Router>
            </Provider>
        );
    }
}

export default  App;

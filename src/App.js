import React, { Component } from 'react';
import './App.css';
import ReservePanel from './Apartments/ReservePanel';
import Reservations from './ReservationsBook/Reservations';
import Home from './Home/Home'
import Header from './Header/Header';
import ApartmentsPanel from './ApartmentsPanel/ApartmentsPanel'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login/Login';
import PrivateRoute from './common/PrivateRoute';
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
import {logoutUser }  from './actions/authActions'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={"container"}>
            <Header />
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={Home}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/apartmentsPanel"
                component={ApartmentsPanel}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/reservations"
                component={Reservations}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/reservePanel"
                component={ReservePanel}
              />
            </Switch> 
            <Route path="/login" component={Login} />
            <hr />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

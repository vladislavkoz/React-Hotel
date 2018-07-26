import {Link} from "react-router-dom";
import React from 'react'
import 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div className="bg-dark">
                <nav className="navbar form-row navbar-expand-lg navbar-dark  text-center">
                    <Link className="navbar-brand" to="/">
                        <i className="far fa-building mr-1"></i>
                        HotelParadise
                    </Link>
                    <button className="navbar-toggler " type="button" data-toggle="collapse"
                            data-target="#navbarContent"
                            aria-controls="navbarContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" aria-expanded="true" id="navbarContent">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/reservations">Reservation Book</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reservePanel">Reserve Panel</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/apartmentsPanel">Apartments Panel</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    };
}

export default Header;
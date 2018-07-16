import '../App.css';
import {Link} from "react-router-dom";
import React from 'react'

const header = () => {
    return (
        <div className="header bg-dark col-md-12">
            <nav className="navbar form-row navbar-expand-lg navbar-dark bg-dark text-center">
                <Link className="navbar-brand" to="/">Hotel Paradise</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/reservations">ReservationBook</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/apartments">Apartments</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default header;
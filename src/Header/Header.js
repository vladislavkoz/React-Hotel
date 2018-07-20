import {Link, NavLink} from "react-router-dom";
import React from 'react'
import 'react-bootstrap';

class Header extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className="bg-dark">
            <nav className="navbar form-row navbar-expand-lg navbar-dark  text-center">
                <Link className="navbar-brand" to="/">Hotel Paradise</Link>
                {/*<button className="navbar-toggler collapsed" type="button" data-toggle="collapsed"*/}
                        {/*data-target="#navbarContent"*/}
                        {/*aria-controls="navbarContent" aria-expanded="false"*/}
                        {/*aria-label="Toggle navigation">*/}
                    {/*<span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}

                <div className="navbar-collapse collapsed " aria-expanded="true" id="navbarContent">
                    <ul className="nav navbar-nav">
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
}

export default Header;
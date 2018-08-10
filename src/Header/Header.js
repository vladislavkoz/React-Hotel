import { Link } from "react-router-dom";
import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions'
import 'react-bootstrap';

class Header extends React.Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div className="w-100 nav navbar-nav">
                <Link className="nav-link" to="/reservations">Reservation Book</Link>
                <Link className="nav-link" to="/reservePanel">Reserve Panel</Link>
                <Link className="nav-link" to="/apartmentsPanel">Apartments Panel</Link>
                <Link className="nav-link text-white disabled" to="/profile">{user.name}</Link>
                <a
                    href=""
                    onClick={this.onLogoutClick.bind(this)}
                    className="nav-link text-danger ml-sm-auto "
                > Logout</a>
            </div>
        );
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                </Link>
                </li>
            </ul>

        );
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

                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
            </div>
        )
    };
}
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Header);
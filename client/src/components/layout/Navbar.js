import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth/authContext";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a href='#!'>
                    <i className='fas fa-sigh-out-alt'></i>
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );

    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>{isAuthenticated ? authContext : guestLinks}</ul>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

Navbar.defaultProps = {
    title: "Contact Keeper",
    icon: "fas fa-id-card-alt"
};

export default Navbar;

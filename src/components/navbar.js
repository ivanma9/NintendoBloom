import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/user_profile">Profile</Link>
                    <Link to="#">Links</Link>
                </div>
                <div id="login">
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;
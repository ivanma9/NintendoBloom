import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user_profile">Profile</Link>
                </li>
                <li>
                    <Link to="#">Links</Link>
                </li>
            </div>
        );
    }
}

export default Navbar;
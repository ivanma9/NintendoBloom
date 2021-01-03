import React from 'react';
import './searchbar.css';

class Searchbar extends React.Component {
    render() {
        return (
            <input id="input-search" className="search-bar" placeholder=" 🔍 Search "></input>
        );
    }
}

export default Searchbar;
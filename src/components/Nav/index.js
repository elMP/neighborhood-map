import React from 'react';
import './styles.css';

const Nav = () => {
    return (
        <nav className="App-header">
            <h1 className="App-title">My neighborhood map</h1>
            <input type="text" placeholder="Search"></input>
            <button>Search</button>
            
        </nav>
    );
}


export default Nav;
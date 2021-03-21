import React from 'react';
import './styles.css';
import { ReactComponent as Logo} from './logo.svg';


function NavBar() {
    return (
        <nav className="main-navbar">
            <Logo className="logo"/>
            <h1 className="logo-text">REGIF</h1>
        </nav>
    );
}

export default NavBar;
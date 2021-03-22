import React from 'react';
import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import handleClickContato from './../Services/Contato';


function NavBar() {

    return (
        <>
            <nav className="main-navbar">
                <Logo className="logo" onClick={handleClickContato} />
                <h1 className="logo-text" onClick={handleClickContato}>REGIF</h1>
            </nav>
        </>
    );
}

export default NavBar;
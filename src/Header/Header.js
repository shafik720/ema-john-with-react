import React from 'react';
import './Header.css'
import logo from '../../src/images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="">
                <img src={logo} alt="" />
            </div>
            <div>
                <nav className="nav">
                    <a href="1">Home</a>
                    <a href="1">About</a>
                    <a href="1">Menu </a>
                </nav>
            </div>
        </div>
    );
};

export default Header;
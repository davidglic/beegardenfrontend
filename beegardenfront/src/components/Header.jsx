import React from 'react'
import headerBee from './images/header-bee.png'

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header-left">
            <h1>Little Bee Gardens</h1>
            <img src={headerBee} />
            </div>
            <div className="header-right">
                <a href="#" className="header-link">About</a>
                <a href="#" className="header-link">Articles/HowTos</a>
                <a href="#" className="header-link">Login/Register</a>
            </div>

        </div>
    )
}

export default Header
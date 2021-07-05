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
                <div className="header-link">About</div>
                <div className="header-link">Articles/HowTos</div>
                <div className="header-link">Login/Register</div>
            </div>

        </div>
    )
}

export default Header
import React from 'react'
import headerBee from './images/header-bee.png'
import { useHistory } from 'react-router-dom';


const Header = (props) => {
    const history = useHistory()

    const handleClick = () => history.push('/')

    return (
        <div className="header-container">
            <div className="header-left">
            <h1 onClick={handleClick}>Little Bee Gardens</h1>
            <img src={headerBee} />
            </div>
            <div className="header-right">
                <a href="/about" className="header-link">About</a>
                <a href="/articles" className="header-link">Articles/HowTos</a>
                <a href="/login" className="header-link">Login/Register</a>
            </div>

        </div>
    )
}

export default Header
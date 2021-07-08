import React from 'react'
import headerBee from './images/header-bee.png'
import { useHistory, Link } from 'react-router-dom';


const Header = (props) => {
    const history = useHistory()

    const handleClick = () => history.push('/')
    const handleLogout = () => {
        props.handleLogout()
        history.push('/')
    }

    return (
        <div className="header-container">
            <div className="header-left">
            <h1 onClick={handleClick}>Little Bee Gardens</h1>
            <img src={headerBee} />
            </div>
            <div className="header-right">
                <Link to="/about" className="header-link">About</Link>
                <Link to="/articles" className="header-link">Articles/HowTos</Link>
                {props.loggedIn ? 
                <Link to="/profile" className="header-link">Profile</Link>
                :
                <Link to="/login" className="header-link">Login/Register</Link>
                }
                {props.loggedIn ? <Link onClick={handleLogout}>Log out</Link> : <></>}
                
            </div>

        </div>
    )
}

export default Header
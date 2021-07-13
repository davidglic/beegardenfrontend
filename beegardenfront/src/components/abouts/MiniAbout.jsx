import React from 'react'
import './MiniAbout.css'
import {Link} from 'react-router-dom'

// image elements
import beeOnClover from '../images/beeonclover.jpg'


const MiniAbout = (props) => {
    return (
        <div className="mini-about-container">
            <div className="mini-about-wrapper">
                <h3 className="mini-about header title">What are Little Bee Gardens?</h3>
                <div className='mini-about-content'>
                
                    <img src="/images/lavender-flower.jpg" className="mini-about-img"/>
                    <div className="mini-about-right">
                    <p className="mini-about-text">Little Bee Gardens are a project started to raise awareness about protecting pollinators and building habitat in urban and suburban areas. Pollinators&mdash;like bees, butterflies, and moths&mdash;are struggling in many areas due to habitat loss and unintentional human interference. These pollinators are essentail for the health of our urban landscapes. Here we provide articles and howtos on how we can all protect this vital natural asset in our cities and towns.</p>
                    <Link to="/about" className="mini-about-link">Learn more</Link>
                    </div>
                    
                </div>
            </div>

            <div className="mini-about-wrapper">
                <h3 className="mini-about header title ">How to build a Little bee garden</h3>
                
                <div className="mini-about-content">
                <img src="/images/planting-hands.jpg" className="mini-about-img"/>
                <div className="mini-about-right">
                <p className="mini-about-text">Our goal is to encourage you to build a little bee garden in your yard to expand your local pollinator friendly habitat. This is a fun and easy gardening project that can be undertaken with little expense of money or time. </p>
                <Link to="/articles" className="mini-about-link">Learn more</Link>
                </div>
                </div>
                
            </div>

            <div className="mini-about-wrapper bottom">
                <h3 className="mini-about header title">Protecting pollinators from chemical exposure.</h3>
                
                <div className="mini-about-content">
                <img src="/images/bumblebee.jpg" className="mini-about-img"/>
                <div className="mini-about-right">
                <p className="mini-about-text">Chemical exposure&mdash;most commonly from pesticides&mdash;are a serious threat to bees and other pollinators. Luckily, there are simple steps you can take to avoid exposing and killing pollinators in your yard. </p>
                <Link to="/articles" className="mini-about-link">Learn more</Link>
                </div>
                </div>
                
            </div>

        </div>
    )
}

export default MiniAbout
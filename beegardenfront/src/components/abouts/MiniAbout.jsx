import React from 'react'
import './MiniAbout.css'

// image elements
import beeOnClover from '../images/beeonclover.jpg'


const MiniAbout = (props) => {
    return (
        <div className="mini-about-container">
            <div className="mini-about-wrapper">
                <h3 className="mini-about header">What are Little Bee Gardens?</h3>
                
                <div className="mini-about-content">
                <img src={beeOnClover} className="mini-about-img"/>
                <p className="mini-about-text">Little Bee Gardens are a project started to raise awareness about protecting pollinators and building habitat in urban and suburban areas. Pollinators&mdash;like bees, butterflies, and moths&mdash;are struggling in many areas due to habitat loss and unintentional human interference. These pollinators are essentail for the health of our urban landscapes. Here we provide articles and howtos on how we can all protect this vital natural asset in our cities and towns.</p>
                
                </div>
                <a href="#" className="mini-about-link">Learn More{'>'}</a>
            </div>

            <div className="mini-about-wrapper">
                <h3 className="mini-about header">How to build a Little bee garden</h3>
                
                <div className="mini-about-content">
                <img src={beeOnClover} className="mini-about-img"/>
                <p className="mini-about-text">Our goal is to encourage you to build a little bee garden in your yard to expand your local pollinator friendly habitat. This is a fun and easy gardening project that can be undertaken with little expense of money or time. </p>
                
                </div>
                <a href="#" className="mini-about-link">Learn More{'>'}</a>
            </div>

            <div className="mini-about-wrapper bottom">
                <h3 className="mini-about header">Protecting pollinators from chemical exposure.</h3>
                
                <div className="mini-about-content">
                <img src={beeOnClover} className="mini-about-img"/>
                <p className="mini-about-text">Chemical exposure&mdash;most commonly from pesticides&mdash;are a serious threat to bees and other pollinators. Luckily, there are simple steps you can take to avoid exposing and killing pollinators in your yard. </p>
                
                </div>
                <a href="#" className="mini-about-link">Learn More{'>'}</a>
            </div>

        </div>
    )
}

export default MiniAbout
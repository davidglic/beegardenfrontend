import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import beeOnClover from '../images/beeonclover.jpg'

const apiRoute = "http://localhost:8000/"

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gardendata: {}
        }
    }
    // gardendata = {}
    async componentDidMount() {
        //get garden info and update state
        const data = await axios.get(`${apiRoute}garden/${this.props.match.params.id}`)
        this.setState({
            gardendata: data.data
        })
        //if logged in: get qr code. See component below.
    }

    render() {
        const data = this.state.gardendata
        return (
            <div className="info-wrapper">
                {/* Display QR if logged in */}
                {this.props.loggedIn ? 
                <div className="loggedin-wrapper">
                    <h3>QR code:</h3>
                    <img src={`https://qrickit.com/api/qr.php?d=http://localhost:3000/info/${this.props.match.params.id}&addtext=Little+Bee+Gardens&bgdcolor=FBBF20&qrsize=480`}/>
                    <h4>To help inspire others in your area you may attach this QR Code to your garden. Anyone who scans it will be able to view the page below:</h4>
                    
                </div>
                : <></>}

                {/* Main Info element. */}
                <h3>Welcome to Little Bee Gardens</h3>
                    <img src={beeOnClover} className="mini-about-img"/>
                    <div className='stat-wrapper'>
                        <div className="stat">This garden was built on {data.created}.</div>
                        <div className="stat">It provides approximately {data.gardenarea} sq. feet of habitat for local pollinators.</div>
                        <div className="stat">There are {data.gardencount_local} total gardens in this zipcode totaling {data.totalsqft_local} sq. feet in area.</div>
                        <div className="stat">The average Bee Garden in this area is {Math.round(data.avgsqft_local)} sq. feet.</div>

                        <br />
                        <div>Nationally:</div>
                        <div className="stat">There are {data.gardencount_total} total gardens in the US totalling {data.totalsqft_total} sq. feet in area.</div>
                        <div className="stat">The average Bee Garden is {Math.round(data.avgsqft_total)} sq. feet.</div>

                    </div>
                    <p className="mini-about-text">Little Bee Gardens are a project started to raise awareness about protecting pollinators and building habitat in urban and suburban areas. Pollinators&mdash;like bees, butterflies, and moths&mdash;are struggling in many areas due to habitat loss and unintentional human interference. These pollinators are essentail for the health of our urban landscapes. Here we provide articles and howtos on how we can all protect this vital natural asset in our cities and towns. 
                     <Link to='/'>Click here to learn more.</Link></p>
                    
                    
                    
                
            </div>
        )
    }
    
}

export default Info
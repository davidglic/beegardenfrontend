import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: ""
        }
    }
    buttonClick = (name) => {
        console.log(name)
        this.setState({
            visible: name
        })
    }
    handleSubmit = (evt, name) => {
        evt.preventDefault()
        if (evt.target[name].value.length === 0) {return}
        console.log(name)
        console.log(evt.target.email.value.length)
    }

    render() {
        return (
            <div className="profile-wrapper">
                <h3>Profile</h3>
                <br />
                <br />
                <div>Registered Email: {this.props.user.email}</div>
                <div>Newsletter: {this.props.user.newsletter ? "Enrolled in newsletter." : "Not enrolled in newsletter."}</div>
                <div>Garden Area: {this.props.user.gardenarea}</div>
                <div>Zipcode of garden Location: {this.props.user.zipcode}</div>
                
                <div className="profile options">
                    <div className="profile-button">Info Page</div>
                    <div className="profile-button" name="account" onClick={() => this.buttonClick("account")}>Edit Account info</div>
                    <div className="profile-button">Change Password</div>
                    <div className="profile-button">Delete garden/registration</div>
               
                </div>
            {this.state.visible === "account" ? 
                <div>
                    <h3>Edit Account Info</h3>
                    <form onSubmit={(evt) => this.handleSubmit(evt, "email")}>
                    <input type="email" name="email" placeholder={this.props.user.email} />
                    <input type="submit" value="update"/>  
                    </form>                    
                </div> : <></>}
                
            
            </div>
        )
    }
}

export default Profile
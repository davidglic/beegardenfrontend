import axios from 'axios'
import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

function isEqual(a,b){
    if (a === b) return true
    return false
}

const apiRoute = "http://localhost:8000/"



class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: "",
            newsletter: this.props.user.newsletter,
            error: ""
        }
    }
    buttonClick = (name) => {
        console.log(name)
        this.setState({
            visible: name
        })
    }

    handleChange = evt => {
        console.log('click')
        this.setState({
            newsletter: !this.state.newsletter
        })
    }

    handleSubmit = async (evt, name) => {
        evt.preventDefault()
        //delete edgecase
        if (name === "delete") {
            //  const deleteTest = await axios.delete(`${apiRoute}update/`, {data: {email: 'this@this.com', password: "bee"}})
            //  console.log(deleteTest)
            await axios.delete(`${apiRoute}update/`, {data: {email: this.props.user.email, token: this.props.user.token}})
                .then(resp => {
                    this.props.handleLogout()
                alert('Account Deleted.')
                this.props.history.push('/')
                })
                .catch(err => {
                    if(err.response) {
                        if (err.response.status === 401) {
            
                            this.setState({error: "Invalid auth token."})
                            this.props.history.push('/login')
                        } else {
                            this.props.history.push('/error')
                        }
                    } else {
                        //anything else
                        this.props.history.push('/error')   
                    }
                })
                
            
            return
        }
        

        //newsletter edgecase 
        if (name === "newsletter") {
            const updatedUser = await axios.post(`${apiRoute}update/`, {email: this.props.user.email, token: this.props.user.token, object: name, new: evt.target[name].value === "true" ? true : false})
            .then(resp => {
                this.props.updateUser(resp.data)
                alert("Account info updated.")
            })
            .catch(err => {
                if(err.response) {
                    if (err.response.status === 401) {
        
                        this.setState({error: "Invalid auth token."})
                        this.props.history.push('/login')
                    } else {
                        this.props.history.push('/error')
                    }
                } else {
                    //anything else
                    this.props.history.push('/error')   
                }
            })
            return
        }

        //password edgcase
        if (name === "password") {
            this.setState({error: ""})
            // console.log(evt.target.currentPassword.value+this.props.auth+evt.target.password.value+evt.target.confirmPassword.value)
            // if (!isEqual(evt.target.currentPassword.value, this.props.auth)) { this.setState({error: "Current password does not match."}); return }
            // if (!isEqual(evt.target.password.value, evt.target.confirmPassword.value)) { this.setState({error: "New passwords mismatch."}); return }
            
            await axios.post(`${apiRoute}update/`, {email: this.props.user.email, 
                token: this.props.user.token, 
                object: name, 
                new: evt.target[name].value, 
                password: evt.target.currentPassword.value})
            .then(resp => {
                this.props.updateAuth(evt.target[name].value)
                this.setState({visible: ''})
                alert("Password updated.")
                // this.props.history.push('/profile')
                
            })
            .catch(err => {
                if(err.response) {
                    // client received an error response (5xx, 4xx)
                    // console.log(err.response.status)
                    // console.log(err.response.data)
                    if (err.response.status === 403) {
        
                        this.setState({error: "Current password is incorrect."})
                    } else {
                        this.props.history.push('/error')
                    }
                } else {
                    //anything else
                    this.props.history.push('/error')
                    
                }
            })
            return
        }
        
          //  const updatetest = await axios.post(`${apiRoute}update/`, {email: 'test@test.com', password: "bee", object: 'gardenarea', new:12})
        //  console.log(updatetest)

        //all other cases

        
        if (evt.target[name].value.length === 0) {return}
        console.log(name)
        const updatedUser = await axios.post(`${apiRoute}update/`, {email: this.props.user.email, token: this.props.user.token, object: name, new: evt.target[name].value})
            .then(resp => {

                this.props.updateUser(resp.data)
                alert("Account info updated.")
                
            })
            .catch(err => {
                if(err.response) {
                    if (err.response.status === 401) {
                        console.log('catch1')
                        this.setState({error: "Invalid auth token."})
                        this.props.history.push('/login')
                    } else {
                        this.props.history.push('/error')
                        console.log('catch2')
                    }
                } else {
                    //anything else
                    console.log('catch3')
                    this.props.history.push('/error')   
                }
            })
        
    }
    
    componentDidMount() {
        if (this.props.loggedIn === false) {this.props.history.push('/login')}
        if (this.props.user.verified === false) {this.props.history.push('/verify')}
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
                    <Link to={`/info/${this.props.user.id}`}><div className="profile-button">Garden Info Page/QR Code</div></Link>
                    <div className="profile-button" name="account" onClick={() => this.buttonClick("account")}>Edit Account info</div>
                    <div className="profile-button" onClick={() => this.buttonClick("password")}>Change Password</div>
                    <div className="profile-button" onClick={() => this.buttonClick("delete")}>Delete garden/registration</div>
               
                </div>
            {this.state.visible === "account" ? 
                <div>
                    <h3>Edit Account Info</h3>
                    <form onSubmit={(evt) => this.handleSubmit(evt, "email")}>
                    Email:<input type="email" name="email" placeholder={this.props.user.email} />
                    <input type="submit" value="update"/>  
                    </form>
                    <form onSubmit={(evt) => this.handleSubmit(evt, "newsletter")}>
                    Receive Newsletter: <input type="checkbox" name="newsletter" value={this.state.newsletter} checked={this.state.newsletter} onChange={this.handleChange}/>
                    <input type="submit" value="update"/>  
                    </form> 
                    <form onSubmit={(evt) => this.handleSubmit(evt, "gardenarea")}>
                    Garden Area:<input type="number" name="gardenarea" min="0" max="999" placeholder={this.props.user.gardenarea} required/>
                    <input type="submit" value="update"/>  
                    </form>
                    <form onSubmit={(evt) => this.handleSubmit(evt, "zipcode")}>
                    Garden Zipcode:<input type="number" name="zipcode" min="10000" max="99999" placeholder={this.props.user.zipcode} required/>
                    <input type="submit" value="update"/>  
                    </form>                          
                </div> : <></>}

                {this.state.visible === "password" ? 
                <div>
                    <h3>Edit Account Info</h3>
                    <form onSubmit={(evt) => this.handleSubmit(evt, "password")}>
                        <br />
                        <div className="error">{this.state.error}</div>
                        <br />

                        Current Password: <input type="password" name="currentPassword" required/> <br />
                        New Password: <input type="password" name="password" required/> <br />
                        Confirm New Password: <input type="password" name="confirmPassword" required/> <br />
                    
                        <input type="submit" value="update"/>  
                    </form>                          
                </div> : <></>}

                {this.state.visible === "delete" ? 
                <div>
                    <h3>Edit Account Info</h3>
                    <form onSubmit={(evt) => this.handleSubmit(evt, "delete")}>
                        <div>Are you sure you wish to delete your profile? This cannot be undone.</div> <br />
                        <input type="submit" value="Confirm Delete"/>  
                    </form>                          
                </div> : <></>}

                
            
            </div>
        )
    }
}

export default Profile
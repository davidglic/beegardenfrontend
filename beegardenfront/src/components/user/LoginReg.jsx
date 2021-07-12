import React, { Component } from 'react'
import axios from 'axios'

// helper functions
function isEqual(a,b){
    if (a === b) return true
    return false
}

const apiRoute = "http://localhost:8000/"

//Main component
class LoginReg extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            error: "",
            newsletter: true
        }
    }

    setError = errorText => {
        //Converts STR to error text that displays on screen.
        //see .catch responses on axios calls to view individual erros
        this.setState({
            error: errorText
        
        })
    }

    handleChange = evt => {
        //newsletter checkbox component updates in state.
        console.log('click')
        this.setState({
            newsletter: !this.state.newsletter
        })
    }

    handleLogin = async (evt) => {
        evt.preventDefault()

        //clear errors
        this.setError("")
        
        const user = await axios.put(`${apiRoute}login/`, {email: evt.target.email.value, password: evt.target.password.value})
            .then(resp => {
                //on 200 success
                this.props.updateUser(resp.data)
                this.props.history.push('/profile') 
            })
            .catch(err => {
                if(err.response) {
                    // client received an error response (5xx, 4xx)
                    if (err.response.status === 403) {
                        this.setError("Incorrect password entered.")
                    } else if (err.response.status === 401) {
                        this.setError("E-mail address not registered.")
                    } else {
                        this.props.history.push('/error')
                    }
                } else {
                    //anything else
                    this.props.history.push('/error')
                }
            })
    }

    handleReg = async (evt) => {
        evt.preventDefault()

        //clear errors
        this.setError('')
        
        //user model
        const data = {
            email: evt.target.email.value, 
            zipcode: evt.target.zipcode.value, 
            gardenarea: evt.target.gardenarea.value, 
            newsletter: evt.target.newsletter.value === "true" ? true : false, 
            password: evt.target.password.value
        }

        //check email match
        if (!isEqual(data.email, evt.target.confirmEmail.value)) {
            this.setState({
                error: "Email addresses mismatch."
            
            })
            return null
        }

        //check password match
        if (!isEqual(data.password, evt.target.confirmPassword.value)) {
            this.setState({
                error: "Passwords mismatch."
            
            })
            return null
        }
        
        //if email/password test pass send user model to backend.
        const newAccount = await axios.post(`${apiRoute}create/`, data)
            .then((resp) => {
                //on success update state with user data from server
                this.props.updateUser(resp.data)
            })
            .catch(err => {
                if(err.response) {
                    // client received an error response (5xx, 4xx)
                    if (err.response.status === 400) {
                        this.setError("Request not accepted. Please check fields.")
                    } else if (err.response.status === 422){
                        this.setError("Email has already been registered. Please login, or use a different email if this is for a new garden.")
                    } else {
                        this.props.history.push('/error')
                    }
                } else {
                    //anything else
                    this.props.history.push('/error')
                }
            })
            const genToken = await axios.put(`${apiRoute}email/sendver/${this.props.user.id}`)
                .then(resp => {
                    this.props.history.push('/profile')
                })
    }

    componentDidMount() {
        //check to see if user is already logged in. Push to profile if true.
        if (this.props.loggedIn) {this.props.history.push('/profile')}
    }

    render() {
        return (
            <div className="loginreg-wrapper">

                <div className="error">{this.state.error}</div>
                <div className="login-container"></div>

                <h3>Login</h3>
                <form onSubmit={this.handleLogin}>
                    Email: <input type="email" name="email" required/><br></br>
                    Password: <input type="password" name="password" required /><br></br>
                    <input type="submit" value="Log In"/>
                </form>

                <div className="register-container"></div>
                <h3>Register A New Garden</h3>
                
                <br />
                <form onSubmit={this.handleReg}>
                    Email: <input type="email" name="email" required/><br></br>
                    Confirm Email: <input type="email" name="confirmEmail" required/><br></br>
                    Password: <input type="password" name="password" required /><br></br>
                    Confirm Password: <input type="password" name="confirmPassword" required /><br></br>
                    Garden Area: <input type="number" name="gardenarea" min="0" max="999" required/><br></br>
                    Zipcode of Garden Location: <input type="number" name="zipcode" min="10000" max="99999" required/><br></br>
                    Receive Newsletter: <input type="checkbox" name="newsletter" value={this.state.newsletter} checked={this.state.newsletter} onChange={this.handleChange}/>
                    <br></br><input type="submit" value="Register"/>
                </form>

            </div>
        )
            
        
    }
}

export default LoginReg
import React, { Component } from 'react'
import axios from 'axios'
// helper functions
function isEqual(a,b){
    if (a === b) return true
    return false
}



const apiRoute = "http://localhost:8000/"

class LoginReg extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            error: "",
            newsletter: true
        }
    }

    setError = errorText => {
        this.setState({
            error: errorText
        
        })
    }

    handleChange = evt => {
        console.log('click')
        this.setState({
            newsletter: !this.state.newsletter
        })
    }

    handleLogin = async (evt) => {
        evt.preventDefault()
        this.setError("")
        console.log(evt.target.email.value + " : " + evt.target.password.value)
        //  const logintest = await axios.put(`${apiRoute}login/`, {email: 'test@test.com', password: "bee"})
        //  console.log(logintest)
        // const user = await axios.put(`${apiRoute}login/`, {email: evt.target.email.value, password: evt.target.password.value})
          
        // console.log(user.data)
        // this.props.updateUser(user.data)
        // this.props.updateAuth(evt.target.password.value)
        // this.props.history.push('/profile')
        const user = await axios.put(`${apiRoute}login/`, {email: evt.target.email.value, password: evt.target.password.value})
            .then(resp => {
                console.log(resp.data)
                this.props.updateUser(resp.data)
                this.props.updateAuth(evt.target.password.value)
                this.props.history.push('/profile') 
            })
            .catch(err => {
                if(err.response) {
                    // client received an error response (5xx, 4xx)
                    // console.log(err.response.status)
                    // console.log(err.response.data)
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
        console.log(evt.target.email.value)
         // const createTest = await axios.post(`${apiRoute}create/`, newAccount)
           // const newAccount = {email: 'new@new.comb', zipcode: 99205, gardenarea: 15, newsletter: true, password: 'bee'}
  //  console.log(createTest.data)
        const data = {
            email: evt.target.email.value, 
            zipcode: evt.target.zipcode.value, 
            gardenarea: evt.target.gardenarea.value, 
            newsletter: evt.target.newsletter.value === "true" ? true : false, 
            password: evt.target.password.value
        }
        console.log(!isEqual(data.email, evt.target.confirmEmail.value))
        console.log(!isEqual(data.password, evt.target.confirmPassword.value))
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
        const newAccount = await axios.post(`${apiRoute}create/`, data)
            .then((resp) => {
                console.log(resp.data)
                this.props.updateUser(resp.data)
                this.props.updateAuth(evt.target.password.value)
                // this.props.history.push('/profile')
            })
            .catch(err => {
                if(err.response) {
                    // client received an error response (5xx, 4xx)
                    // console.log(err.response.status)
                    // console.log(err.response.data)
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
        // console.log(newAccount.data)
        // this.props.updateUser(newAccount.data)
        // this.props.updateAuth(evt.target.password.value)
        // this.props.history.push('/profile')

        // if (isEqual(evt.target.email) 
    }
    componentDidMount() {
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
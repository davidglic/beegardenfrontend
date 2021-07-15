import axios from 'axios';
import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import './Verify.css'

const apiRoute = "https://littlebeegardenbackend.herokuapp.com/"

const Verify = (props) => {

    const [error, setError] = useState('')
    const history = useHistory()

    const handleClick = async () => {
        //handle resend email request.
        axios.put(`${apiRoute}email/sendver/${props.user.id}`)
        alert("Email Sent.")
    }

   const handleSubmit = async (event) => {
       //handle token submit/verify

        event.preventDefault()
        
        //user id and entered token
        const data = {
            id: props.user.id,
            vertoken: Number(event.target.vertoken.value)
        }

        //verify token/userid with backend
        await axios.post(`${apiRoute}email/verify/`, data)
            .then(resp => {
                //on success
                props.updateVerified()
                history.push('/profile')
            })
            .catch(err => {
                if(err.response) {
                    // client received an error response (5xx, 4xx)
                    if (err.response.status === 401) {
                        setError("Incorrect verification token entered.")
                    } else {
                        history.push('/error')
                    }
                } else {
                    //anything else
                    history.push('/error')
                }
            })
        
    }

    return (
        <div className="verify-wrapper">
            <h3>Please enter the verification token we sent to your email.</h3>
            <form onSubmit={handleSubmit}>
                <h5 className="title">Verification Code:</h5>
                <div className="error">{error}</div>
                <input  className="ver-textbox" type='number' max='999999' name='vertoken'/> <br />
                <input type='submit' value="Submit" />
            </form>
            <div>If you haven't received an email, please click <button onClick={handleClick}>here</button> to resend.</div>

        </div>
    )
}

export default Verify
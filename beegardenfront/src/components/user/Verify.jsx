import axios from 'axios';
import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';

const apiRoute = "http://localhost:8000/"

const Verify = (props) => {

    const [error, setError] = useState('')
    const history = useHistory()
// http://localhost:8000/email/sendver/5
    const handleClick = async () => {
        
        axios.put(`${apiRoute}email/sendver/${props.user.id}`)
        alert("Email Sent.")
    }
   const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            id: props.user.id,
            vertoken: Number(event.target.vertoken.value)
        }
        await axios.post(`${apiRoute}email/verify/`, data)
            .then(resp => {
                props.updateVerified()
                history.push('/profile')
            })
            .catch(err => {
                if(err.response) {
                    // client received an error response (5xx, 4xx)
                    // console.log(err.response.status)
                    // console.log(err.response.data)
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
                <h5>Verification Code:</h5>
                <div className="error">{error}</div>
                <input type='number' max='999999' name='vertoken'/> <br />
                <input type='submit' value="Submit" />
            </form>
            <div>If you haven't received an email, please click <button onClick={handleClick}>here</button> to resend.</div>

        </div>
    )
}

export default Verify
import React from 'react'
function Error() {
    return(
        <div>
            <h3>Server Error - 418: I am a teapot.</h3>
            <div>The server refuses the attempt to brew coffee with a teapot.</div>

            <h4>We are experiencing issues. Please try again later.</h4>
            <img src="/images/lostbee.png" />


        </div>
    )
}

export default Error
import React from 'react'

function Button() {
    
    function sendClick(){
        console.log('click');
    }

    return (
        <button onClick={sendClick}>Send</button>
    )
}

export default Button

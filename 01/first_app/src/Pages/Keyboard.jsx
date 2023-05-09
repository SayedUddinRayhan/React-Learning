import React from 'react'


let down = () => {
    alert("Key down")
}

let up = () => {
    alert("Key up")
}

let pressed = () => {
    alert("Key pressed")
}
function Keyboard() {
    return (
        <div>
            <h1>Keyboard Event</h1>
            <input type="text" onKeyDown={down} />
            <br />
            <input onKeyUp={up} type="text" name="" id="" />
            <br />
            <input onKeyUp={pressed} type="text" name="" id="" />
        </div>
    )
}

export default Keyboard
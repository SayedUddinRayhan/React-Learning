import React from 'react'

let click = () => {
    alert("Text copied.")
}

let cut = () => {
    alert("Text cuted")
}

let paste = () => {
    alert("Text paste successfully")
}

let focus = () => {
    alert("Focused")
}

let blur = () => {
    alert("Blur")
}
function Clipboard() {
    return (
        <div>
            <p onCopy={click}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, iure.</p>

            <p onCut={cut}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta!</p>
            <input onPaste={paste} type="text" />
            <br />
            <input type='text' onFocus={focus}></input>
            <br />
            <input onBlur={blur} type="text" name="" id="" />

        </div>
    )
}

export default Clipboard
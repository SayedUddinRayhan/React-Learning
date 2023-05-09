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
function Clipboard() {
    return (
        <div>
            <p onCopy={click}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, iure.</p>

            <p onCut={cut}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta!</p>
            <input onPaste={paste} type="text" />

        </div>
    )
}

export default Clipboard
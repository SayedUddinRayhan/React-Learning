import React from 'react'
import cssmodulestyle from './CSSmodule.module.css'

function CSSmodule() {
    return (
        <div>
            <p className={cssmodulestyle.cls1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, omnis?</p>
        </div>
    )
}

export default CSSmodule
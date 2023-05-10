import React from 'react'

function Style() {
    const style1 = {
        color: 'blue',
        backgroundColor: 'red',
        textAlign: 'center'
    }
    return (
        <div>
            <h1 style={style1}>Hello world</h1>
            <p className='cls1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, natus.</p>
        </div>
    )
}

export default Style
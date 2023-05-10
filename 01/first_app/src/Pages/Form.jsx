import React, { Component } from 'react'

export default class Form extends Component {
    change = (event) => {
        console.log(event.target.value)
    }
    render() {
        return (
            <div className='container'>
                <input type="text" name='text' placeholder='Enter your name' className='form-control' onChange={this.change} />

            </div>
        )
    }
}

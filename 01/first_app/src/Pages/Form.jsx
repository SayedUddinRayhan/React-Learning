import React, { Component } from 'react'

export default class Form extends Component {
    change = (event) => {
        console.log(event.target.value)
    }
    render() {
        return (
            <div className='container'>
                <input type="text" name='text' placeholder='Enter your name' className='form-control' onChange={this.change} />

                <select name="category" className='form-control' onChange={this.change}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        text: "",
        category: "",
        date: "",
        about: "",
        gender: "",
        checkBox: false
    }

    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    check = (event) => {
        this.setState({
            checkBox: event.target.checked
        })
    }



    submit = () => {
        console.log(this.state)
    }

    render() {
        let { text, category, date, about } = this.state
        return (
            <div className='container'>
                <input type="text" name='text' placeholder='Enter your name' className='form-control' onChange={this.change} value={text} />

                <select name="category" className='form-control' onChange={this.change} value={category}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <input type="date" name='date' onChange={this.change} className='form-control' value={date} />

                <textarea name="about" id="" rows="10" onChange={this.change} className='form-control' value={about}></textarea>

                <div>
                    <input type="radio" name='gender' value='Male' onChange={this.change} />
                    <label name="gender">Male</label>
                    <input type="radio" name='gender' value='Female' onChange={this.change} />
                    <label name="gender">Female</label>
                </div>

                <input type="checkbox" name='checkBox' checked={this.checkBox} onChange={this.check} />
                <label htmlFor="checkbox">I agree and continue</label>
                <br />
                <button className='btn btn-primary' onClick={this.submit}>Submit</button>

            </div>
        )
    }
}

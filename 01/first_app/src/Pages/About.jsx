import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'rayhan',
            age: 25,
            profession: "Engineer"
        }
    }

    btn1(prof) {
        this.setState(
            {
                profession: "Doctor"
            }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.profession}</h1>
                <button onClick={this.btn1.bind(this, this.prof)}>Click me</button>
            </div>
        )
    }
}

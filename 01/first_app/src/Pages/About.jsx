import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'rayhan',
            age: 25,
            profession: {
                prof1: "Engineer",
                prof2: "Web Developer"
            }
        }
    }

    render() {
        return (
            <div>{this.state.profession.prof2}</div>
        )
    }
}

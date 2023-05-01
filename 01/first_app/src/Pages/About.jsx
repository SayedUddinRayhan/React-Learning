import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'ray'
        }
    }

    render() {
        return (
            <div>{this.state.name}</div>
        )
    }
}

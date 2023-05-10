import React, { Component } from 'react'
import Fidar from './Fidar';
import './Externalcss.css'


export default class Adminpanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yourage: false,
        }
    }
    render() {
        let result;
        if (this.state.yourage) {
            result = "Admin page"
        } else {
            result = <Fidar />
        }
        return (
            <div>
                {result}
            </div>
        )
    }
}

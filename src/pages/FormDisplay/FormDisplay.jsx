import React, { Component } from 'react' 
import './FormDisplay.css'

export default class FormDisplay extends Component {
    render() {
        return (
            <div className="view-container">
                <h4 className="heading">NAME CARD</h4>
                <p>Name:</p>
                <p>Email:</p>
                <p>Phone:</p>
            </div>
        )
    }
}

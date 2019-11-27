import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: "",
            email: "",
            phone:"",
            formErrors: {name: "Name cannot be empty", email: "Email cannot be empty", password: "Enter Password"}
        }
    }

    handleClick() {
        this.setState({

        })

    }


    render() {
        return (
            <div className="container">
                <div className="sub-container">
                <div className="name-container">
                    <p>Name:</p>
                    <input name="name" type="text" placeholder="Name..." value={this.state.name}/>
                </div>
                <div className="email-container">
                    <p>Email:</p>
                    <input name="email" type="text" placeholder="Email..." value={this.state.email}/>
                </div>
                <div className="phone-container">
                    <p>Phone:</p>
                    <label className="prefix">+91</label>
                    <input name="phone" type="text" placeholder="" value={this.state.phone}/>
                </div>
                <div className="password-container">
                    <p>Password:</p>
                    <input type="text" name="password" placeholder="Password..."/>
                </div>
                <div className="confirmpass-container">
                    <p>Confirm Password:</p>
                    <input name="cnfrm-password" type="text" placeholder="Confirm password..."/>
                </div>
                <div className="checkbox-container">
                    <input name="checkbox" type="checkbox" />
                    <label>I agree to the terms and conditions</label>
                </div>
                <div className="button-container">
                    <a href="" className="button" onClick={this.handleClick}>Register</a>
                </div>
                </div>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button'
import FormDisplay from '../FormDisplay/FormDisplay.jsx';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: "",
            email: "",
            phone:"",
            addPhone: false,
            showElement: false
        }


        this.handleOnchange = this.handleOnchange.bind(this)
        this.handleaddPhone = this.handleaddPhone.bind(this)
        this.handledeletePhone = this.handledeletePhone.bind(this)
        this.handleElement = this.handleElement.bind(this)
    }


    handleElement() {
        this.setState({
            showElement: true
        })
    }

    handleaddPhone() {
        this.setState({
            addPhone: true
        })
    }

    handleOnchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handledeletePhone() {
        this.setState({
            addPhone: false
        })
    }


    render() {
        return (
            <div className="container">
                <h3 className="title">REGISTRATION FORM</h3>
                    <div className="sub-container">
                        <div className="name-container">
                            <p className="paragraph">Name</p>
                            <input name="name" type="text"  className="input" placeholder="Name..." value={this.state.name} onChange={this.handleOnchange}/>
                        </div>
                        <div className="email-container">
                            <p className="paragraph">Email</p>
                            <input name="email" type="text" className="input" placeholder="Email..." value={this.state.email}/>
                        </div>
                        <div className="phone-container">
                            <p className="paragraph">Phone</p>
                            <label className="prefix">+91</label>
                            <input name="phone" type="text" placeholder="Pone Number" className="input" value={this.state.phone}/>
                            <label><FontAwesomeIcon icon={faPlus} onClick={this.handleaddPhone} className="icon"/></label>
                            <label><FontAwesomeIcon icon={faTimes} onClick={this.handledeletePhone} className="icon"/></label>
                            {this.state.addPhone ? <p><input name="phone" type="text" placeholder="Phone Number"/></p> : "" }
                        </div>
                        <div className="password-container">
                            <p className="paragraph">Password</p>
                            <input type="text" name="password" className="input" placeholder="Password..."/>
                        </div>
                        <div className="confirmpass-container">
                            <p className="paragraph">Confirm Password</p>
                            <input name="confirm-password" type="text" className="input" placeholder="Confirm password..."/>
                        </div>
                        <div className="checkbox-container">
                            <input name="checkbox" type="checkbox" className="checkbox" />
                            <label>I agree to the terms and conditions</label>
                        </div>
                        <div className="button-container">
                            <Button variant="contained" color="primary" className="button" onClick={this.handleElement}>Register</Button>
                            {this.state.showElement ? <div className="display"><FormDisplay /></div> : ""}
                        </div>
                    </div>
            </div>
        )
    }
}

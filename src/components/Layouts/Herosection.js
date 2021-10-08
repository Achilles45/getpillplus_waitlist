import React, { Component } from 'react'
import './Herosection.scss';
import men from '../../images/men.png'
// import roundIcon from '../../images/round-shape.svg'
import pattern from '../../images/pattern.svg'

import { withRouter } from 'react-router-dom';

// import firebase from "firebase";
import db from "../../firebase/init"

class Herosection extends Component {
        //State
        state = {
            email: "",
            phone: "",
            account_type: ""
        }

        //Methods
        onChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
        }

        //OnForm submit method
        joinWaitlist = (e) => {
            e.preventDefault();
            db.collection("waitlist_users").doc(this.state.email).set({
                email: this.state.email,
                phone: this.state.phone,
                account_type: this.state.account_type
            }) 
       
            //Then clear state
            this.setState({
                email: "",
                phone: "",
                account_type: ""
            })

            //Now redirect
            this.props.history.push("/success")
        }

    render() {
        const { email, phone, account_type } = this.state;
        return (
            <div className="herosection">
                <div className="herosection__icons__holder d-none d-md-block">
                    {/* <img src={ roundIcon } className="icons round-icon" alt="" /> */}
                    <img src={ pattern } className="icons pattern1" alt="" />
                    <img src={ pattern } className="icons pattern2" alt="" />
                    <img src={ pattern } className="icons pattern3" alt="" />
                </div>
                {/* <div className="balls__holder">
                    <div className="ball ball1"></div>
                    <div className="ball ball2"></div>
                    <div className="ball ball3"></div>
                    <div className="ball ball4"></div>
                    <div className="ball ball5"></div>
                </div> */}
               <div className="container">
                <div className="row">
                        <div className="col-md-5 herosection__content">
                            <h1>Redefining access to quality health care</h1>
                            <p>Get connected to your healthcare provider/patients to receive/offer quality medical services from anywhere in the world</p>
                            <form onSubmit={this.joinWaitlist.bind(this)} className="waitlist__form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Your email address...." 
                                                name="email"
                                                value={ email }
                                                required
                                                onChange={ this.onChange }
                                                />
                                        </div>
                                    </div>
                                <div className="col-md-6 phoneHolder">
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Your phone number...." 
                                            name="phone"
                                            value={ phone }
                                            max="11"
                                            min="11"
                                            onChange={ this.onChange }
                                            required
                                        />
                                    </div>
                                </div>
                                </div>
                               <div className="row">
                               <div className="form-group mt-3">
                                    <div className="dropdown">
                                        <select required
                                            name="account_type" 
                                            className="form-select" 
                                            id="" 
                                            value={account_type} 
                                            onChange={this.onChange}>
                                            <option value="" defaultValue disabled>Select your account type...</option>
                                            <option value="Professional">Professional</option>
                                            <option value="Personal">Personal</option>
                                        </select>
                                    </div>
                                </div>
                               </div>
                                <button
                                    type="submit"
                                    className="submit__btn"><span>Join Our Waitlist</span></button>
                            </form><br />
                            <p className="help"><i className="fas fa-check-square"></i>&nbsp;&nbsp; If you need any help, call <a href="tel: +2347035813970" className="tel">0703-581-3970</a></p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6 hero__img__section">
                            <img src={ men } className="img-fluid men" alt="men" />
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}


export default withRouter(Herosection)
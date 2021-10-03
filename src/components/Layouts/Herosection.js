import React, { Component } from 'react'
import './Herosection.scss';
import men from '../../images/men.png'
// import roundIcon from '../../images/round-shape.svg'
import pattern from '../../images/pattern.svg'


//Firebase imports

export default class Herosection extends Component {
        //State
        state = {
            email: "",
            phone: ""
        }

        //Methods
        onChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
        }

        //OnForm submit method
        joinWaitlist = () => {
            // db.collection('waitlist_users').add({
            //     email: this.state.email
            // })
        }

    render() {
        const { email, phone } = this.state;
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
                                <div className="col-md-6 phone">
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
                                <button
                                    type="submit" className="button" 
                                    className="submit__btn"><span>Join Our Waitlist</span></button>
                            </form>
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

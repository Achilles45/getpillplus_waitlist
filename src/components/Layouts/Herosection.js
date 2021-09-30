import React, { Component } from 'react'
import './Herosection.scss';
import woman from '../../images/woman-image.png'
import roundIcon from '../../images/round-shape.svg'
import pattern from '../../images/pattern.svg'

export default class Herosection extends Component {
    render() {
        return (
            <div className="herosection">
                <div className="herosection__icons__holder d-none d-lg-block">
                    <img src={ roundIcon } className="icons round-icon" alt="" />
                    <img src={ pattern } className="icons pattern1" alt="" />
                    <img src={ pattern } className="icons pattern2" alt="" />
                    <img src={ pattern } className="icons pattern3" alt="" />
                </div>
                <div className="balls__holder d-none d-lg-block">
                    <div className="ball ball1"></div>
                    <div className="ball ball2"></div>
                    <div className="ball ball3"></div>
                    <div className="ball ball4"></div>
                    <div className="ball ball5"></div>
                </div>
               <div className="container">
                <div className="row">
                        <div className="col-md-5 herosection__content">
                            <h1>Redefining access to quality health care</h1>
                            <p>Get connected to your healthcare provider/patients to receive/offer quality medical services from anywhere in the world</p>
                            <form className="waitlist__form d-flex justify-content-betweeb">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your email address" />
                                <button
                                    type="submit" 
                                    className="submit__btn">Join Our Waitlist</button>
                            </form>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6 hero__img__section">
                            <img src={ woman } className="img-fluid" alt="Woman" />
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

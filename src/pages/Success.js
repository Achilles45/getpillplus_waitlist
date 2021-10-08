import React, { Component } from 'react'
import '../components/Layouts/Herosection.scss';
import men from '../images/men.png'
export default class Success extends Component {

    render() {
        return (
            <div className="herosection">
               <div className="container">
                <div className="row">
                        <div className="col-md-5 herosection__content pt-5">
                            <h1>You're now officially on our waitlist</h1>
                            <p>We will keep you updated via email and our social media handle. Thank you for joining us on this journey</p>
    
                        </div><br /><br />
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

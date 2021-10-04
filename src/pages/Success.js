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
                            <p>Thank you for showing interest in this amazing health product we are building to improve access to quality healthcare. We will surely reach out to you when we finally go live. Stay well and stay safe!</p>
    
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

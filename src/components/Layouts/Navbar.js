import React from 'react'
import './Navbar.scss'
import logo from '../../images/resized_logo.png';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__content d-flex justify-content-between">
                    <div className="navbar__left">
                        <img src={ logo } className="logo" alt="PillPlus Logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from "gatsby"

import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
            <Link to="/"><span className="navbar-brand">STRATEGICA</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/team/">Team</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Wings
                        </a>
                        <div className="dropdown-menu">
                            <Link to="/finance"><span className="dropdown-item">Finance</span></Link>
                            <Link to="/analytics"><span className="dropdown-item">Analytics</span></Link>
                            <Link to="/economics"><span className="dropdown-item">Economics & Consulting</span></Link>
                            <Link to="/research"><span className="dropdown-item">Research</span></Link>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link to="#">Social Media</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">Newsletter</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">Collaborations</Link>
                    </li>


                </ul>
            </div>
        </nav>
    )
}

export default Navbar

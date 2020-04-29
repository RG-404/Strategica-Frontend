import React from 'react'
import { Link } from "gatsby"

import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
            <a className="navbar-brand" href="/">LOGO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/team/">Team</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Wings
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/finance">Finance</a>
                            <a className="dropdown-item" href="/analytics">Analytics</a>
                            <a className="dropdown-item" href="/enomics">Economics & Consulting</a>
                            <a className="dropdown-item" href="/research">Research</a>
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

import React from 'react'
import { Link } from "gatsby"

import './footer.css'

const Footer = () => {
    return (
            <div className="footer">
                <div className="container-fluid copyright">
                    <div className="row">
                        <div className="col text-left">
                            <span className="pointer">
                                © STRATEGICA 2020
                            </span>
                        </div>
                        <div className="col text-right pointer">
                            Designed by Dedsec
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer

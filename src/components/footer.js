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
                            Website by &nbsp;
                            <a href="https://www.linkedin.com/in/rishi-gogoi/" target="_blank" rel="noreferrer noopener">
                                Rishparn Gogoi
                            </a>
                             &nbsp;&amp;&nbsp;
                            <a href="about:blank" target="_blank" rel="noreferrer noopener">
                                Subhranan Bora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './economics.css'

const Economics = () => (
    <Layout>
            <div className="parallaxeco" />
            <header id="tripp">
                <h1>ECONOMICS AND CONSULTING WING</h1>
            </header>
            <div id="bllock1">
                <h3 id="med">"Labour was the first price, the original purchase - money that was paid for all things. It was not by gold or by silver, but by labour, that all wealth of the world was originally purchased."~ Adam Smith</h3>
                <div>
                    <h3 id="meed">Welcome to our Economics &amp; Consulting Team 2020-21</h3>
                    <div id="ecocollage">
                        <img src="pip.png" alt="economics" height={600} width={880} />
                    </div>
                </div>
                <br />
            </div>
            <div id="bllock2">
                <h2 className="titlee">Executive members :</h2>
                <div className="liste">
                    <ol type={1}>
                        <li><p>Seemanta Shome</p></li>
                        <li><p>Sreeya Dutta</p></li>
                        <li><p>Bijay Verma</p></li>
                        <li><p>Shreya Simanta Sarmah</p></li>
                        <li><p>Hiya Bandana Bora</p></li>
                    </ol>
                    <h2 className="titlee">Assistant executive members:</h2>
                    <ol type={1}>
                        <li><p>Anjan Pathak</p></li>
                        <li><p>Mriganabh Bhargab Saikia</p></li>
                        <li><p>Anudit Das</p></li>
                        <li><p>Swapnil Gautam</p></li>
                        <li><p>Chinmoy De Kashyap</p></li>
                        <li><p>Mayur Chetia</p></li>
                        <li><p>Debaditya Sarma</p></li>
                        <li><p>Angshuman Bora</p></li>
                        <li><p>Papumoni Deka</p></li>
                        <li><p>Parikhshit Bora/p&gt;</p></li>
                    </ol>
                </div>
            </div>
            <footer>
                <p><br /></p>
                <p>STRATEGICA 2020</p>
                <p>Designed by Dedsec </p>
                <p>strategica@yahoo.com </p>
                <p>Instagram ID : @strategica_jec</p>
            </footer>
    </Layout>
)

export default Economics

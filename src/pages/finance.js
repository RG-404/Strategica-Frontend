import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './finance.css'

const Finance = () => (
    <Layout>
        <div className="parallaxfin" />
        <header id="trip">
            <h1>FINANCE WING</h1>
        </header>
        <div id="block1">
            <h2 id="zed">"Price is what you pay. Value is what you get. ~ Warren Buffet"</h2>
            <div>
                <p id="zeed">Welcome to our finance team 2020-21</p>
                <div id="financecollage">
                    <img src="team mates\financeteam.jpg" alt height={600} width={880} />
                </div>
            </div>
            <br />
        </div>
        <div id="block2">
            <h2 className="titlef">Executive members :</h2>
            <div className="listf">
                <ol type={1}>
                    <li><p>Anurag Kashyap</p></li>
                    <li><p>Akangshya Pathak</p></li>
                    <li><p>Aritra Kaushik</p></li>
                    <li><p>Bedabrat Talukdar</p></li>
                    <li><p>Rimon Dutta</p></li>
                    <li><p>Seemanta Shome</p></li>
                    <li><p>Sreeya Dutta</p></li>
                </ol>
                <br />
                <h2 className="titlef">Assistant core members:</h2>
                <ol type={1}>
                    <li><p>Kritartha Gautam</p></li>
                    <li><p>Abinash Barman</p></li>
                    <li><p>Chirantan Bhuyan</p></li>
                    <li><p>Gunjan Pratim Buragohain</p></li>
                    <li><p>Anusikha Goswami</p></li>
                    <li><p>Nayan Das</p></li>
                    <li><p>Meghna Goswami</p></li>
                    <li><p>Debadeep Dutta</p></li>
                    <li><p>Tamzid Ahmed</p></li>
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

export default Finance
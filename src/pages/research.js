import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './research.css'

const Research = () => (
    <Layout>
        <div className="parallaxres" />
        <header id="trippp">
            <h1>#### RESEARCH WING ####</h1>
        </header>
        <div id="blllock1">
            <h3 id="red">"The true laboratory is the mind, where behind illusions we uncover the laws of truth"- Jagadish Chandra Bose</h3>
            <div>
                <h3 id="reed">Welcome to our Research Team 2020-21</h3>
                <div id="rescollage">
                    <img src="reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.jpg" alt height={600} width={880} />
                </div>
            </div>
            <br />
        </div>
        <div id="blllock2">
            <h2 className="titler">Executive members :</h2>
            <div className="listr">
                <ol type={1}>
                    <li><p>Mriganka Mandal</p></li>
                    <li><p>Bedabrat Talukdar</p></li>
                    <li><p>Rahul Sharma</p></li>
                    <li><p> Bishal Das</p></li>
                    <li><p>Rajdeep Das</p></li>
                    <li><p>Manas Pratim Goswami</p></li>
                    <li><p>Shreya Simanta Sarmah</p></li>
                    <li><p>Arpita Sarkar</p></li>
                    <li><p>Lakshmishree Saikia</p></li>
                    <li><p>Subhranan Bora</p></li>
                </ol>
                <h2 className="titler">Assistant executive members:</h2>
                <ol type={1}>
                    <li><p> Tanmoy Sarma</p></li>
                    <li><p>Anupam Bharati</p></li>
                    <li><p>Manish Tapan Deka</p></li>
                    <li><p>Syed Arshadul Haque</p></li>
                    <li><p>Chinmoy De Kashyap</p></li>
                    <li><p>Hrithik Pradhan</p></li>
                    <li><p>Tanmoy Saikia</p></li>
                    <li><p>Arantara Choudhury</p></li>
                    <li><p>Diya Karmakar</p></li>
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

export default Research

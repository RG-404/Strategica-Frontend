import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './about-us.css'

const Aboutus = () => (
    <Layout>
        <div>
            <div id="abtus">
                <div className="parallax_aboutus" />
                <div id="data">
                    <h1>STRATEGICA</h1><br />
                    <p>The STRATEGICA is a intra-college students' community of Jorhat
                    Engineering College, which hopes to work in close association with other
        clubs of JEC.</p><br />
                    <p>This club is mandated to inculcate the spirit of research, innovation and
                    analytical knowledge and also catering to the cause of enhancing financial
                    literacy and economic knowledge amongst the students of JECians. This club
                    is also intended to serve the interests of aspiring researchers and give them a
                    platform to present their papers on science, technology,management,
        economics and finance-the five pillars of Industry 4.0</p> <br />
                    <h2>Club Objectives :</h2><br />
                    <ol type={1}>
                        <li>To foster the spirit of innovation among the college students.</li>
                        <li>To spread financial and economic awareness among the students</li>
                        <li>To impart knowledge on state-of-the art technologies like data science,data
          analytics,AI and ML in association with GLUG.</li>
                        <li>To apprise the students of the college about the recent scientific and
          technological breakthroughs.</li>
                        <li>To foster analytical thinking in the college.</li>
                        <li>To serve as student's think-tank to the college.</li>
                    </ol><br />
                    <h2>Proposed Club Activities :</h2><br />
                    <ol type={1}>
                        <li>Conducting intra-college mini-research projects like issue analysis based
          on data visualisation techniques.</li>
                        <li>Conducting workshops , seminars or webinars on AI, ML and data
          analytics.</li>
                        <li>Conducting technological and management hackathons like data analytics
          competition, case-study competitions.</li>
                        <li>Conducting workshops on investments, stock markets, virtual trading,
          exchange -trade, budgeting,public finance,etc</li>
                        <li>Conducting quizzes on finance, economics and sci-tech.</li>
                        <li>Conducting paper-presentation competitions during
          TECHNOVUS,PHOENIX.</li>
                        <li>Organising a 'In-House Budget Discussion' on the lines of IITs,NITs etc.</li>
                    </ol>
                </div>
                <br /><br />
                <p>
                </p>
            </div>
            <footer>
                <p>STRATEGICA 2020</p>
                <p>Designed by Dedsec </p>
                <p>strategica@yahoo.com </p>
                <p>Instagram ID : @strategica_jec</p>
            </footer>
        </div>

    </Layout>
)

export default Aboutus

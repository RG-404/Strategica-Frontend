import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <div className="welcome animated fadeInUp slow">
        <h1>WELCOME TO STRATEGICA</h1>
        <a id="roll" href="selectscreen.html"><h2>Finance | Economics &amp; Consulting | Research | Analaytics</h2></a>
        <h6 id="collegename">JORHAT ENGINEERING COLLEGE</h6>
        <a href="aboutus.html" className=" btn  b1">ABOUT US</a>
        <a href="contact.html" className=" btn  b2">CONTACT</a>
      </div>
    </header>
  </Layout>
)

export default IndexPage

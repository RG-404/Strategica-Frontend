import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SocialBar from '../components/SocialBar';
import SEO from "../components/seo"

import Logo from '../images/logo.jpg'
import './index.css'

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div className="landing animated fadeIn slow">
        <div className="hero">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="image-0 d-block w-100" style={{ backgroundImage: 'url(https://i.picsum.photos/id/1076/1920/1080.jpg)' }}></div>
                <div className="carousel-caption d-md-block carousel-caption-main animated fadeInUp">
                  <img src={Logo} alt="" className="logo-hero" />
                  <h1 className="text-center"><u>WELCOME TO STRATEGICA</u></h1>
                  <h4>Finance | Economics &amp; Consulting | Research | Analaytics</h4>
                  <h5 className="mt-2">JORHAT ENGINEERING COLLEGE</h5>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-0 d-block w-100" style={{ backgroundImage: 'url(https://i.picsum.photos/id/600/1920/1080.jpg)' }}></div>
                <div className="carousel-caption d-md-block carousel-caption-margin animated fadeInUp">
                  <h2><u>BLOG POST TITLE</u></h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at eaque obcaecati autem, eveniet amet maiores necessitatibus rem cum incidunt.</p>
                  <button type="button" className="btn btn-dark">READ MORE</button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image-0 d-block w-100" style={{ backgroundImage: 'url(https://i.picsum.photos/id/1058/1920/1080.jpg)' }}></div>
                <div className="carousel-caption d-md-block carousel-caption-margin animated fadeInUp">
                  <h2><u>BLOG POST TITLE</u></h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti at eaque obcaecati autem, eveniet amet maiores necessitatibus rem cum incidunt.</p>
                  <button type="button" className="btn btn-dark">READ MORE</button>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="blogs-recent d-flex justify-content-center align-items-center">
          <SocialBar/>
          RECENT BLOGS WILL GO HERE
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

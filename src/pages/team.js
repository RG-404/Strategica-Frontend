import React from "react"
import Particles from "react-particles-js"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Member from "../components/member"

import './team.css'

const paraticlesOptions = {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        },
        "color": {
            "value": "#ffffff"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
};

const team = () => (
    <Layout>
        <SEO title="Team" />
        <Particles className="particles" params={paraticlesOptions} />
        <div className="team">
            <div className="container faculty sections">
                <h1 className="text-center">FACULTY COORDINATORS</h1>
                <hr/>
                <div className="text-center mb-2">
                    <span>"A leader is one who knows the way, goes the way, and shows the way." ~ John C. Maxwell</span>
                </div>

                <div className="row">
                    <div className="col-sm-6 my-2 odd">
                        <Member />
                    </div>
                    <div className="col-sm-6 my-2 even">
                        <Member />
                    </div>
                </div>
            </div>
            <div className="container lead-team sections">
                <h1 className="text-center">LEAD TEAM</h1>
                <hr/>
                <div className="text-center mb-2">
                    <span>Leaders instill in their people a hope for success and a belief in themselves. Positive leaders empower people to accomplish their goals."</span>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member />
                    </div>
                    <div className="col-md-6 even">
                        <Member />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member invert={true} />
                    </div>
                    <div className="col-md-6 even">
                        <Member invert={true} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member />
                    </div>
                    <div className="col-md-6 even">
                        <Member />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member invert={true} />
                    </div>
                </div>
            </div>
            <div className="container alumuni sections">
                <h1 className="text-center">ALUMUNI MEMBERS</h1>
                <hr/>
                <div className="text-center mb-2">
                    <span>"Leaders instill in their people a hope for success and a belief in themselves. Positive leaders empower people to accomplish their goals."</span>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member />
                    </div>
                    <div className="col-md-6 even">
                        <Member />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member invert={true} />
                    </div>
                    <div className="col-md-6 even">
                        <Member invert={true} />
                    </div>
                </div>
            </div>
            <div className="container senior sections">
                <h1 className="text-center">SENIOR MEMBERS</h1>
                <hr/>
                <div className="text-center mb-2">
                    <span>"The very essence of leadership is that you have to have vision. You can't blow an uncertain trumpet." ~ Theodore M. Hesburgh</span>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member />
                    </div>
                    <div className="col-md-6 even">
                        <Member />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member invert={true} />
                    </div>
                    <div className="col-md-6 even">
                        <Member invert={true} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member invert={true} />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default team

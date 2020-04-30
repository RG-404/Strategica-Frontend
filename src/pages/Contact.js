import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import axios from "axios";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = () => {
    axios
      .post("https://art-gallery-nitya-soni-aurin.herokuapp.com/notify", {
        name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => { });
  };

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="container contact-tab d-flex justify-content-center align-items-center">
      <title>Nitya Soni - Contact</title>
      <div className="row animated fadeInUp slow">
        <div className="col-md-6 d-flex justify-content-start align-items-center details">
          <ul>
            <div>
              <li>
                <a href="https://goo.gl/maps/zZdYYaEkRKBtLw2z6" target="_blank" rel="noreferrer noopener">
                  <i className="fas fa-map-marker-alt" />
                Gautam  Buddha  Nagar, Uttar Pradesh, India
              </a>
              </li>
              {/* <li>
                <i className="fas fa-phone" />
                Phone: (0039) 333 12 68 347
              </li> */}
              <li>
                <a href="mailto:nityasoni1000@gmail.com?Subject=Hi%20Nitya!" target="_blank" rel="noreferrer noopener">
                  <i className="fas fa-envelope" />
                  Email: nityasoni108@gmail.com
                </a>
              </li>
              <li>
              <a href="https://www.instagram.com/nityasoni1000/" target="_blank" rel="noreferrer noopener">
                <i className="fab fa-instagram" />
                Instagram: nityasoni1000
              </a>
              </li>
              <li>
              <a href="https://www.youtube.com/channel/UCpoUfNGDZuZ_nmCUD-dgCoQ" target="_blank" rel="noreferrer noopener">
                <i className="fab fa-youtube" />
                Youtube: Nitya Soni
              </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center form-col">
          <div className="form">
            <label htmlFor="basic-url">
              <h2>GET IN TOUCH WITH ME</h2>
            </label>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  Your Name
                </span>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                aria-label=""
                placeholder="email address"
                required
              />
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Message</span>
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control textarea"
                aria-label="With textarea"
                defaultValue={""}
                required
              />
            </div>
            <div className="pt-4">
              <button className="btn btn-primary" onClick={submitHandler}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

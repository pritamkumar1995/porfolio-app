import React from "react";
import { TypeAnimation } from "react-type-animation";
import './Profile.css';

import scrollService from "../../../util/scrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/pritam.kumarraj">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/p_r_i_t_a_m_r_a_j/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/pritam-kumar-707566159/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.threads.net/@p_r_i_t_a_m_r_a_j">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Pritam Kumar</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="profile-text">
              {""}
              <h1>
                {""}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Enthusiastic Dev   🚀",
                    1250,
                    "Frontend React-Js  💻",
                    1250,
                    "Node-Js(Backend)   ⚙️",
                    1250,
                    "Redux 🔧",
                    1250,
                  ]}
                  speed={20}
                  style={{ fontWeight: "bold"}}
                  repeat={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and Back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => scrollService.scrollHandler.scrollToHire()}>
              {""}
              Hire Me{""}
            </button>
              <a
                href="PRITAM-RESUME-UPDATE.pdf"
                download="PRITAM-RESUME-UPDATE.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

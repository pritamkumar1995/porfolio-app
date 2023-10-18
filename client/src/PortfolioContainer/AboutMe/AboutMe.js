import React, { useEffect } from "react";
import './AboutMe.css'
import ScreenHeading from "../../util/ScreenHeading/ScreenHeading";
import scrollService from "../../util/scrollService";
import Animations from "../../util/Animations";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I specialize in Front-end web development as well as on Node js for Backend. I have experience and expertise in React, Redux and Node-js. I have worked on various web development projects using these technologies.",
    highlights: {
      bullets: [
        "Frontend web development",
        "Interactive UI using Html, Css and Javascript",
        "React-Redux with State Management",
        "Node Js for Backend Operations",
        "Express Js",
        "Web optimization for quick load",
        "Signal-fx & Splunk Monitoring",
        "Redis Cache & Docker",
        "Server Side Rendering"
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
          <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container Fade-in"  id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
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
        </div>
      </div>
    </div>
  );
}

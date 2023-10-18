import React, { useState } from "react";
import ScreenHeading from "../../util/ScreenHeading/ScreenHeading";
import scrollService from "../../util/scrollService";
import Animations from "../../util/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return(
      <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate+"-"+props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
    </div>
    )
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Internship", logoSrc: "education.svg" },
    { label: "Interest", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingInPercentage: 80 },
    { skill: "React Js", ratingInPercentage: 85 },
    { skill: "Node Js", ratingInPercentage: 75 },
    { skill: "TypeScript", ratingInPercentage: 80 },
    { skill: "Core Java", ratingInPercentage: 65 },
    { skill: "Express Js", ratingInPercentage: 75 },
    { skill: "HTML", ratingInPercentage: 85 },
    { skill: "CSS", ratingInPercentage: 80 },
    { skill: "DS & Algorithm", ratingInPercentage: 65 },
  ];

  const projectDetails = [
    {
      title: "Personal Porfolio Website",
      description:"A Personal Porfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React Js, Bootstrap",
    },
  ];

  const internshipDetails = [
    {
      title: "Development Of Scalable Architecture for Surveillance Application",
      description: "We developed a project for surveillance , the camera will start recording when there is any movement or suspects detected in the environment else it will skip/stop recording ",
      subHeading: " From : Council of Scientific and Industrial Research-Central Mechanical Engg. Research Institution, Durgapur Kolkatta",
      fromDate: "2019",
    },
  ];

  const interestDetails = [
    {
      title: "BADMINTON 🏸",
      description: "-Participated in All India Inter-NIT Badminton championship",
      fromDate: "2017",
      toDate: "2018"
    },
    {
      title: "CRICKET 🏏",
      description: "-Participated in All India Inter-NIT Cricket Championship",
      fromDate: "2017 - 2018 ",
      toDate: "2019"
    },
    {
      title: "NCC 👨🏻‍✈️",
      description: "-NCC Cadet(Attended Camp)",
      fromDate: "2018",
      toDate: "2019"
    },
    {
      title: "SINGING 🎤",
      description: "-Mr. Fresher for the batch 2016-2020",
      fromDate: "2016",
      toDate: "2017"
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"National Institute Of Technology, Manipur"}
        subHeading={"BACHELOR OF TECHNOLOGY - Computer Science & Engg."}
        fromDate={"2016"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"High Schooling XII"}
        subHeading={"North Point Higher Secondary School"}
        fromDate={"2012"}
        toDate={"2014"}
      />
      <ResumeHeading
        heading={" Schooling X"}
        subHeading={"Kendriya Vidyalaya Sangathan"}
        fromDate={"2010"}
        toDate={"2012"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"ValueLabs Location:Hyderabad"}
        subHeading={"Senior Sofware Engineer"}
        fromDate={"2020"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as a Frontend and Backend web Developer.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Working with Shutterfly Client.
        </span>
        <br />
        <span className="resume-description-text">
          - Contributed to the new Video feature added in Shutterfly PhotoBook.
        </span>
        <br />
        <span className="resume-description-text">- Client Handling</span>
        <br/>
        <span className="resume-description-text">- Website Optimisation</span>
      </div>
      </div>
      ,
      <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingInPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((project, index) => (
          <ResumeHeading
            key={index}
            heading={project.title}
            subHeading={project.subHeading}
            description={project.description}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="internship">
        {internshipDetails.map((intern, index) => (
          <ResumeHeading
            key={index}
            heading={intern.title}
            description={intern.description}
            subHeading={intern.subHeading}
            fromDate={intern.fromDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        {interestDetails.map((interest, index) => (
          <ResumeHeading
            key={index}
            heading={interest.title}
            description={interest.description}
            fromDate={interest.fromDate}
            toDate={interest.toDate}
          />
        ))}
      </div>
  ];

  const handleCarousal = (index)=>{
    let offsetHeight =360;
    let newCarousalOffset ={
      style:{transform: "translateY("+ index * offsetHeight * -1 + "px)"}
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  }

  const getBullets =()=>{
    return resumeBullets.map((bullet,index)=>(
       <div onClick={()=>handleCarousal(index)} className={index===selectedBulletIndex? "bullet selected-bullet": "bullet"}>
           <img className="bullet-logo"
           src={require(`../../assets/Resume/${bullet.logoSrc}`)}
           alt='not-found '
           />
           <span className="bullet-label">{bullet.label}</span>
       </div>
    ))
  }

  const getResumeScreen =()=>{
    return(
        <div style={carousalOffSetStyle.style} className="resume-details-carousal">
            {resumeDetails.map((ResumeDetails)=> ResumeDetails)}
        </div>
    )
  }

  return (
    <div className="resume-container screen-container Fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio-Details"} />
        <div className="resume-card">
           <div className="resume-bullets">
               <div className="bullet-container">
                   <div className="bullet-icons"></div>
                   <div className="bullets">{getBullets()}</div>
               </div>
           </div>
           <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}

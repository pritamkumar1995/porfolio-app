import React,{useState} from "react";
import { TypeAnimation } from "react-type-animation";
import {toast} from 'react-toastify';
import axios from 'axios';

import "./ContactMe.css";
import imageBack from "../../images/e.avif";
import loading from "../../images/d.gif";


import ScreenHeading from "../../util/ScreenHeading/ScreenHeading";
import scrollService from "../../util/scrollService";
import Animations from "../../util/Animations";
import Footer from "../Footer/Footer";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = scrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [banner,setBanner] = useState("");
  const [boolean,setBoolean] = useState(false);

  const handleName =(e)=>{
    setName(e.target.value);
  }
  const handleMail =(e)=>{
    setEmail(e.target.value);
  }
  const handleMessage =(e)=>{
    setMessage(e.target.value);
  }
  const submitHandler =async(e)=>{
    e.preventDefault();
    try {
      let data ={
        name,
        email,
        message
      }
      setBoolean(true);
      const response = await axios.post('https://backend-contact-connect.onrender.com/contact', data);
      if(name.length === 0 || email.length === 0 || message.length === 0){
        setBanner(response.data.msg);
        toast.error(response.data.msg);
        setBoolean(false);
        setTimeout(() => {
          setBanner('');
        }, 7000);
      }else if(response.status===200){
        setBanner(response.data.msg);
        toast.success(response.data.msg);
        setBoolean(false);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          setBanner('');
        }, 7000);
      }
    } catch (error) {
      console.log("error pritam ",error);
    }
  }
  return (
    <div className="main-container  Fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <TypeAnimation
              sequence={["Get In Touch 🤝", 1250, "You Can Mail Me 📩", 1250]}
              speed={20}
              style={{ fontWeight: "bold" }}
              repeat={Infinity}
            />
          </h2>{""}
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
        <div className="back-form">
            <div className="img-back">
                <h4>Send your message here 👉🏻</h4>
                <img src={imageBack} alt="image not found"/>
            </div>
            <form onSubmit={submitHandler}>
                <p>{banner}</p>
                <label htmlForm='name'>Name :</label>
                <input type='text' placeholder="type your good name 😊" onChange={handleName} value={name}></input>

                <label htmlForm='email'>Email :</label>
                <input type='email' placeholder="your mail address  ✉️" onChange={handleMail} value={email}></input>

                <label htmlForm='message'>Message:</label>
                <textarea className="text-area-line" type='text' placeholder="Any Message For Me!!" onChange={handleMessage} value={message}></textarea>
                {boolean ? (<b><img className="load" src={loading} alt='gif-not-found'/></b>):( <div className="send-btn">
                    <button type="submit">
                       send<i className=" fa fa-paper-plane"></i>
                    </button>
                </div>)}
            </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

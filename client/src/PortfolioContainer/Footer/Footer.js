import React from 'react';
import scrollService from '../../util/scrollService';
import './Footer.css'

export default function Footer(){
    return(
        <div className="scroll-container">
        <button
          className="btn-scroll"
          onClick={() => scrollService.scrollHandler.scrollToHome()}
        >
          {" "}
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    )
}

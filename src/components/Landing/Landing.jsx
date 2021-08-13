import React from "react";
import "./Landing.css";
import typetester2 from "./../../assets/typetester2.png";
import Typewriter from "typewriter-effect";

const Landing = () => {
    return(
        <div className="landing-container">
          <div data-aos="fade-up-right" className="landing-left">
              <h1 className="landing-header">Can you type...</h1>
              <div className="typewriter-container">
              <Typewriter
                options={{
                strings: ['Fast?', 'Correct?' , 'Quick?'],
                autoStart: true,
                loop: true,
                }}
              />
              </div>
          </div>
          <div className="landing-right">
              <img
              data-aos="fade-up-left"
               className="flash-image" 
               src={typetester2} 
               alt="a hero image" />
          </div>

        </div>
    );
}

export default Landing;
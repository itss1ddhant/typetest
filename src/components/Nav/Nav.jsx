import React from "react";
import typetester1 from "./../../assets/typetester1.png";
import "./Nav.css";

const Nav = () => {
    return ( 
        <div className="nav-container">
            <div className="nav-left">
                <img className="type-logo" src={typetester1} alt="logo" />
                <p className="type-logo-text">Typetester!</p>
            </div>
            <div className="nav-right">
                <a
                target="_blank"
                className="nav-link"
                href="https://www.linkedin.com/in/siddhant-pandey-00a03017a/"
                rel="noreferrer"
                >
                    in
                </a>
              
            </div>
        </div>
     );
}

export default Nav;